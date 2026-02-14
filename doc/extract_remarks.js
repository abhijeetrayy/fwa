const fs = require('fs');
const xml = fs.readFileSync('doc/remarks_extract/word/document.xml', 'utf8');

// In OOXML, a "run" is <w:r>...</w:r>. Inside we may have <w:rPr> with <w:highlight w:val="cyan"/> and <w:color w:val="..."/>
// and <w:t>text</w:t>. Extract runs that contain highlight or blue color, then get their text.

const runRegex = /<w:r[^>]*>([\s\S]*?)<\/w:r>/g;
let run;
const remarks = [];
let allText = [];

while ((run = runRegex.exec(xml)) !== null) {
  const runContent = run[1];
  // Word uses <w:highlight w:val="cyan"/> and blue text color
  const hasCyan = runContent.indexOf('highlight') !== -1 && runContent.indexOf('cyan') !== -1;
  const hasBlue = runContent.indexOf('w:color') !== -1 && (runContent.indexOf('0000FF') !== -1 || runContent.indexOf('2563EB') !== -1 || runContent.indexOf('2E75B6') !== -1 || runContent.indexOf('4472C4') !== -1 || runContent.indexOf('themeColor') !== -1);
  const hasShading = false; // reserved for future
  const textMatch = runContent.match(/<w:t[^>]*>([^<]*)<\/w:t>/g);
  let text = '';
  if (textMatch) {
    text = textMatch.map(m => m.replace(/<w:t[^>]*>([^<]*)<\/w:t>/, '$1')).join('');
  }
  if (text) allText.push(text);
  if ((hasCyan || hasBlue || hasShading) && text) {
    remarks.push(text.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<'));
  }
}

// Group consecutive remarks into single items (same "sentence")
const grouped = [];
let current = '';
for (const r of remarks) {
  const trimmed = r.trim();
  if (trimmed.match(/^[.,;:!?)]\s*$/) || (current && !current.match(/[.!?]\s*$/))) {
    current += r;
  } else {
    if (current) grouped.push(current.trim());
    current = trimmed;
  }
}
if (current) grouped.push(current.trim());

console.log('=== EXTRACTED REMARKS (cyan highlight / blue text) ===\n');
grouped.forEach((r, i) => console.log((i + 1) + '. ' + r));
console.log('\n---\nRaw count:', remarks.length, 'runs;', grouped.length, 'grouped items.');
