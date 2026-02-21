/**
 * Extract DOCX content with full formatting (font, color, underline, etc.)
 * Uses existing packages: jszip, fast-xml-parser. NO new dependencies.
 *
 * Run: node doc/extract-docx-formatting.js [path/to/file.docx] [output.json]
 *   --html   output HTML instead of JSON (visual formatting preview)
 *
 * Output: JSON with text + formatting details per run
 *   format keys: bold, italic, underline, strikethrough, color, highlight, fontSizePt, fontFamily
 */

const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const { XMLParser, XMLBuilder } = require('fast-xml-parser');

// Word OOXML namespaces (we use short local names after parsing)
const NS = {
  w: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
};

// Map w:val highlight values to readable names
const HIGHLIGHT_MAP = { yellow: 'yellow', green: 'green', cyan: 'cyan', magenta: 'magenta', blue: 'blue', red: 'red', darkBlue: 'darkBlue', darkCyan: 'darkCyan', darkGreen: 'darkGreen', darkMagenta: 'darkMagenta', darkRed: 'darkRed', darkYellow: 'darkYellow', darkGray: 'darkGray', lightGray: 'lightGray', black: 'black', white: 'white', none: 'none' };

// Map underline types
const UNDERLINE_MAP = { single: 'single', double: 'double', thick: 'thick', dotted: 'dotted', dashed: 'dashed' };

function parseRPr(node, inherit = {}) {
  if (!node) return inherit;
  const format = { ...inherit };
  const rPr = node['w:rPr'] || node.rPr;
  if (!rPr) return format;

  const children = rPr['w:*'] || rPr['*'] || rPr;
  if (typeof children !== 'object') return format;

  const getVal = (el) => {
    if (typeof el !== 'object') return undefined;
    if (Array.isArray(el)) el = el[0];
    return el?.['@_w:val'] ?? el?.['@_val'] ?? (el && !el['#text'] ? 'present' : undefined);
  };

  for (const [tag, val] of Object.entries(children)) {
    if (!val) continue;
    const v = getVal(val);
    switch (tag) {
      case 'w:b':
      case 'b':
        format.bold = true;
        break;
      case 'w:i':
      case 'i':
        format.italic = true;
        break;
      case 'w:u':
      case 'u':
        format.underline = v || 'single';
        break;
      case 'w:strike':
      case 'strike':
        format.strikethrough = true;
        break;
      case 'w:dstrike':
      case 'dstrike':
        format.doubleStrikethrough = true;
        break;
      case 'w:color':
      case 'color':
        if (v && v !== 'auto') format.color = v.startsWith('#') ? v : '#' + v;
        break;
      case 'w:highlight':
      case 'highlight':
        format.highlight = v || 'yellow';
        break;
      case 'w:sz':
      case 'sz':
        if (v) format.fontSizePt = parseInt(v, 10) / 2; // half-points to pt
        break;
      case 'w:szCs':
      case 'szCs':
        if (v) format.fontSizeCsPt = parseInt(v, 10) / 2;
        break;
      case 'w:rFonts':
      case 'rFonts':
        const rf = typeof val === 'object' && !Array.isArray(val) ? val : {};
        const ascii = rf['@_w:ascii'] ?? rf['@_ascii'];
        const hAnsi = rf['@_w:hAnsi'] ?? rf['@_hAnsi'];
        const eastAsia = rf['@_w:eastAsia'] ?? rf['@_eastAsia'];
        format.fontFamily = ascii || hAnsi || eastAsia || undefined;
        break;
      case 'w:vertAlign':
      case 'vertAlign':
        format.verticalAlign = v; // sub, sup, baseline
        break;
      case 'w:position':
      case 'position':
        if (v) format.position = parseInt(v, 10) / 2; // half-points
        break;
      case 'w:shadow':
      case 'shadow':
        format.shadow = true;
        break;
      case 'w:outline':
      case 'outline':
        format.outline = true;
        break;
      case 'w:caps':
      case 'caps':
        format.caps = true;
        break;
      case 'w:smallCaps':
      case 'smallCaps':
        format.smallCaps = true;
        break;
    }
  }
  return format;
}

function getText(node) {
  if (typeof node === 'string') return node;
  if (!node) return '';
  if (node['#text']) return node['#text'];
  if (node['w:t']) {
    const t = node['w:t'];
    return Array.isArray(t) ? t.map(getText).join('') : (typeof t === 'string' ? t : t?.['#text'] || '');
  }
  return '';
}

function walkBody(doc, body, out = [], pIndex = 0) {
  const wp = body['w:p'] || body.p;
  const wpList = Array.isArray(wp) ? wp : (wp ? [wp] : []);

  for (let i = 0; i < wpList.length; i++) {
    const p = wpList[i];
    const runs = [];
    const pPr = p['w:pPr'] || p.pPr;

    const processRuns = (parent, runParent) => {
      const wr = parent['w:r'] || parent.r;
      const wrList = Array.isArray(wr) ? wr : (wr ? [wr] : []);

      for (const r of wrList) {
        let fmt = parseRPr(r, {});
        let txt = getText(r);
        const ins = r['w:ins'] || r.ins;
        const del = r['w:del'] || r.del;

        if (ins) {
          const insTxt = getText(ins) || (ins['w:t'] ? (Array.isArray(ins['w:t']) ? ins['w:t'].join('') : ins['w:t']) : '');
          fmt = parseRPr(ins, fmt);
          if (insTxt) runs.push({ text: insTxt, format: fmt, revision: 'inserted' });
          const inner = ins['w:r'] || ins.r;
          if (inner) processRuns({ 'w:r': inner }, ins);
        }
        if (del) {
          const delTxt = getText(del) || (del['w:t'] ? (Array.isArray(del['w:t']) ? del['w:t'].join('') : del['w:t']) : '');
          if (delTxt) runs.push({ text: delTxt, format: { ...fmt, strikethrough: true }, revision: 'deleted' });
        }
        if (!ins && !del && txt) {
          runs.push({ text: txt, format: fmt });
        }
      }
    };

    processRuns(p);

    out.push({ paragraphIndex: pIndex + i, runs });
  }

  return out;
}

function extractFromDocx(docxPath) {
  const buf = fs.readFileSync(docxPath);
  return JSZip.loadAsync(buf).then((zip) => {
    const docFile = zip.file('word/document.xml');
    if (!docFile) throw new Error('No word/document.xml in docx');
    return docFile.async('text');
  }).then((xml) => {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      parseTagValue: false,
    });
    const doc = parser.parse(xml);
    const body = doc?.['w:document']?.['w:body'] || doc?.document?.body;
    if (!body) throw new Error('Could not find document body');
    const result = walkBody(doc, body);
    return result;
  });
}

function toHtml(data) {
  const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const span = (text, fmt) => {
    if (!fmt || Object.keys(fmt).length === 0) return escape(text);
    const styles = [];
    if (fmt.color) styles.push(`color:#${fmt.color.replace('#','')}`);
    if (fmt.highlight && fmt.highlight !== 'none') styles.push(`background:${fmt.highlight === 'yellow' ? '#ffff00' : fmt.highlight}`);
    if (fmt.fontSizePt) styles.push(`font-size:${fmt.fontSizePt}pt`);
    const deco = [];
    if (fmt.underline) deco.push('underline');
    if (fmt.strikethrough) deco.push('line-through');
    if (deco.length) styles.push(`text-decoration:${deco.join(' ')}`);
    const cls = [];
    if (fmt.bold) cls.push('bold');
    if (fmt.italic) cls.push('italic');
    const styleAttr = styles.length ? ` style="${styles.join(';')}"` : '';
    const classAttr = cls.length ? ` class="${cls.join(' ')}"` : '';
    return `<span${classAttr}${styleAttr}>${escape(text)}</span>`;
  };
  let html = '<!DOCTYPE html><html dir="rtl" lang="he"><head><meta charset="utf-8"><style>body{font:14px/1.6 Arial;padding:2em;max-width:800px}.bold{font-weight:bold}.italic{font-style:italic}p{margin:0.5em 0}</style></head><body>';
  for (const p of data) {
    const inner = (p.runs || []).map(r => span(r.text, r.format)).join('');
    if (inner) html += `<p>${inner}</p>`;
  }
  html += '</body></html>';
  return html;
}

// --- Main ---
const args = process.argv.slice(2);
const useHtml = args.includes('--html');
const filteredArgs = args.filter(a => a !== '--html');
const inputPath = filteredArgs[0] || path.join(__dirname, 'FWA WEBSITE HEB Remarks.docx');
const outputPath = filteredArgs[1] || path.join(__dirname, 'docx-formatting-extract.' + (useHtml ? 'html' : 'json'));

if (!fs.existsSync(inputPath)) {
  console.error('File not found:', inputPath);
  process.exit(1);
}

extractFromDocx(inputPath)
  .then((data) => {
    if (useHtml) {
      fs.writeFileSync(outputPath, toHtml(data), 'utf8');
      console.log('Extracted', data.length, 'paragraphs to HTML:', outputPath);
    } else {
      fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf8');
      console.log('Extracted', data.length, 'paragraphs to', outputPath);
      console.log('Format keys: bold, italic, underline, strikethrough, color, highlight, fontSizePt, fontFamily');
    }
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
