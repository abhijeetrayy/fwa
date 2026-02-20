/**
 * Extract HEB remarks from "FWA WEBSITE HEB Remarks.docx"
 * - Applies Track Changes: use INSERTED (red) text as the correction; omit DELETED text.
 * - Collects YELLOW highlighted runs: client's text to use instead of AI translation.
 *
 * Run: npm run extract-heb   (from project root)
 */

const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const { XMLParser } = require('fast-xml-parser');

const DOCX_PATH = path.join(__dirname, 'FWA WEBSITE HEB Remarks.docx');
const OUT_PATH = path.join(__dirname, 'HEB-FINAL-REMARKS.md');

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  ignoreDeclaration: true,
});

function getTextFromNode(obj, acc = []) {
  if (!obj) return acc;
  if (typeof obj === 'string') {
    acc.push(obj);
    return acc;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item) => getTextFromNode(item, acc));
    return acc;
  }
  if (typeof obj === 'object') {
    // w:t or w:delText
    if (obj['w:t']) acc.push(obj['w:t']);
    if (obj['w:delText']) acc.push(obj['w:delText']); // we'll use only in "deleted" context
    for (const key of Object.keys(obj)) {
      if (key.startsWith('@_')) continue;
      getTextFromNode(obj[key], acc);
    }
    return acc;
  }
  return acc;
}

function getRunText(run) {
  const parts = getTextFromNode(run);
  return parts.filter((x) => typeof x === 'string').join('');
}

function hasYellowHighlight(rPr) {
  if (!rPr) return false;
  const highlight = rPr['w:highlight'];
  if (!highlight) return false;
  const val = highlight && (highlight['@_w:val'] ?? highlight['@_val']);
  return (val && String(val).toLowerCase() === 'yellow') || val === 'yellow';
}

function extractParagraphText(p, options = {}) {
  const { includeDeleted = false, collectYellow = [] } = options;
  const parts = [];

  function walk(node, insideIns = false, insideDel = false) {
    if (!node) return;
    if (typeof node === 'string') {
      if (!insideDel || includeDeleted) parts.push(node);
      return;
    }
    if (Array.isArray(node)) {
      node.forEach((n) => walk(n, insideIns, insideDel));
      return;
    }
    if (typeof node !== 'object') return;

    // Detect runs either as node['w:r'] or as node with w:rPr (parser may use numeric keys for siblings)
    const runs = node['w:r'];
    const runList = runs !== undefined
      ? (Array.isArray(runs) ? runs : [runs])
      : (node['w:rPr'] && (node['w:t'] !== undefined || node['w:delText'] !== undefined) ? [node] : null);
    if (runList) {
      for (const r of runList) {
        if (!r) continue;
        const rPr = r['w:rPr'];
        const text = getRunText(r);
        if (hasYellowHighlight(rPr) && text.trim()) collectYellow.push(text.trim());
        if (!insideDel || includeDeleted) parts.push(text);
      }
      return;
    }
    for (const key of Object.keys(node)) {
      if (key.startsWith('@_')) continue;
      if (key === 'w:ins') {
        walk(node[key], true, false);
        continue;
      }
      if (key === 'w:del') {
        walk(node[key], false, true);
        continue;
      }
      if (key === 'w:r') continue; // already handled above
      walk(node[key], insideIns, insideDel);
    }
  }

  walk(p);
  return { text: parts.join('').replace(/\s+/g, ' ').trim(), yellow: collectYellow };
}

/** Recursively find all runs that contain yellow highlight. When we're at w:rPr, parent is the run. */
function collectYellowFromTree(obj, parent, collectYellow) {
  if (!obj) return;
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => collectYellowFromTree(item, obj, collectYellow));
    return;
  }
  if (typeof obj !== 'object') return;
  const keys = Object.keys(obj).filter((k) => !k.startsWith('@_'));
  if (obj['w:highlight']) {
    const hl = obj['w:highlight'];
    const val = hl['@_w:val'] ?? hl['@_val'];
    if (val && String(val).toLowerCase() === 'yellow' && parent) {
      const text = getRunText(parent).trim();
      if (text) collectYellow.push(text);
    }
  }
  for (const key of keys) {
    if (key === 'w:highlight') continue;
    collectYellowFromTree(obj[key], obj, collectYellow);
  }
}

function extractBody(body) {
  const paragraphs = [];
  const allYellow = [];

  function processBlock(obj) {
    if (!obj) return;
    if (Array.isArray(obj)) {
      obj.forEach(processBlock);
      return;
    }
    if (typeof obj !== 'object') return;

    if (obj['w:p']) {
      const ps = Array.isArray(obj['w:p']) ? obj['w:p'] : [obj['w:p']];
      for (const p of ps) {
        const { text, yellow } = extractParagraphText(p, { collectYellow: allYellow });
        if (text) paragraphs.push(text);
      }
      return;
    }
    // Direct paragraph (body has array of w:p; each item is a paragraph with w:r, w:ins, etc.)
    if ((obj['w:r'] || obj['w:ins'] || obj['w:del']) && !obj['w:p']) {
      const { text, yellow } = extractParagraphText(obj, { collectYellow: allYellow });
      if (text) paragraphs.push(text);
      return;
    }
    if (obj['w:tbl']) {
      const tables = Array.isArray(obj['w:tbl']) ? obj['w:tbl'] : [obj['w:tbl']];
      for (const tbl of tables) {
        const rowTexts = [];
        const tr = tbl['w:tr'];
        const rows = tr ? (Array.isArray(tr) ? tr : [tr]) : [];
        for (const row of rows) {
          const cells = row['w:tc'];
          const tcs = cells ? (Array.isArray(cells) ? cells : [cells]) : [];
          const cellTexts = tcs.map((tc) => {
            const content = tc['w:p'] ?? tc['w:p']?.[0];
            const ps = content ? (Array.isArray(content) ? content : [content]) : [];
            return ps
              .map((p) => extractParagraphText(p, { collectYellow: allYellow }).text)
              .filter(Boolean)
              .join(' | ');
          });
          rowTexts.push(cellTexts.join('\t'));
        }
        paragraphs.push('[Table]\n' + rowTexts.join('\n'));
      }
      return;
    }
    for (const key of Object.keys(obj)) {
      if (key.startsWith('@_')) continue;
      processBlock(obj[key]);
    }
  }

  processBlock(body);
  // Also scan entire body for yellow (handles parser output with numeric keys)
  collectYellowFromTree(body, null, allYellow);
  return { paragraphs, yellow: allYellow };
}

async function main() {
  if (!fs.existsSync(DOCX_PATH)) {
    console.error('File not found:', DOCX_PATH);
    process.exit(1);
  }

  const buf = fs.readFileSync(DOCX_PATH);
  const zip = await JSZip.loadAsync(buf);
  const docFile = zip.file('word/document.xml');
  if (!docFile) {
    console.error('word/document.xml not found inside docx');
    process.exit(1);
  }

  const xmlText = await docFile.async('string');
  const parsed = parser.parse(xmlText);
  let doc = parsed['w:document'] || parsed.document;
  if (Array.isArray(doc)) doc = doc[0];
  if (!doc || typeof doc !== 'object') doc = Object.values(parsed)[0];
  let body = doc && (doc['w:body'] || doc.body);
  if (!body && doc && doc['0']) {
    body = doc['0']['w:body'] || doc['0'];
    if (!body) body = doc['0'];
  }
  if (!body) {
    console.error('Unexpected document structure. Root keys:', parsed ? Object.keys(parsed) : 'no parse');
    if (doc) console.error('Doc keys:', Object.keys(doc).filter((k) => !String(k).startsWith('@_')));
    process.exit(1);
  }

  const { paragraphs, yellow } = extractBody(body);

  const fullText = paragraphs.join('\n\n');
  const yellowUnique = [...new Set(yellow)].filter(Boolean);


  const md = [
    '# HEB Remarks – Extracted from FWA WEBSITE HEB Remarks.docx',
    '',
    '**Instructions from client:**',
    '- **Track Changes (red):** Corrections are applied below — use the inserted text (final version).',
    '- **Yellow highlight:** Phrases below are the client’s own text. Replace any AI-translated text on the site with these exact phrases.',
    '',
    '---',
    '',
    '## Full text (with Track Changes applied)',
    '',
    fullText,
    '',
    '---',
    '',
    '## Yellow-highlighted phrases (use client’s text instead of AI translation)',
    '',
    ...yellowUnique.map((t, i) => `${i + 1}. ${t}`),
    '',
  ].join('\n');

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, md, 'utf8');
  console.log('Written:', OUT_PATH);
  console.log('Paragraphs:', paragraphs.length);
  console.log('Yellow phrases:', yellowUnique.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
