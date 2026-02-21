#!/usr/bin/env node
/**
 * Extract yellow-highlighted and inserted text from docx-formatting-extract.json
 * Output: paragraphIndex, fullPhrase, type (yellow|inserted)
 * Map to translation keys in assets/js/translations.js
 */

const fs = require('fs');
const path = require('path');

const JSON_PATH = path.join(__dirname, 'docx-formatting-extract.json');
const data = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));

const extracted = [];

for (const para of data) {
  const idx = para.paragraphIndex;
  const runs = para.runs || [];
  let yellowBuf = [];
  let insertedBuf = [];

  for (const run of runs) {
    const text = run.text || '';
    const fmt = run.format || {};
    const isYellow = fmt.highlight === 'yellow';
    const isInserted = run.revision === 'inserted';

    if (isYellow) {
      yellowBuf.push(text);
    } else if (yellowBuf.length > 0) {
      const merged = yellowBuf.join(' ').replace(/\s+/g, ' ').trim();
      if (merged) extracted.push({ paragraphIndex: idx, fullPhrase: merged, type: 'yellow' });
      yellowBuf = [];
    }

    if (isInserted) {
      insertedBuf.push(text);
    } else if (insertedBuf.length > 0) {
      const merged = insertedBuf.join(' ').replace(/\s+/g, ' ').trim();
      if (merged) extracted.push({ paragraphIndex: idx, fullPhrase: merged, type: 'inserted' });
      insertedBuf = [];
    }
  }

  if (yellowBuf.length > 0) {
    const merged = yellowBuf.join(' ').replace(/\s+/g, ' ').trim();
    if (merged) extracted.push({ paragraphIndex: idx, fullPhrase: merged, type: 'yellow' });
  }
  if (insertedBuf.length > 0) {
    const merged = insertedBuf.join(' ').replace(/\s+/g, ' ').trim();
    if (merged) extracted.push({ paragraphIndex: idx, fullPhrase: merged, type: 'inserted' });
  }
}

// Build paragraph text lookup for context
const paraText = {};
for (const para of data) {
  const full = (para.runs || []).map(r => (r.text || '')).join('');
  paraText[para.paragraphIndex] = full.trim();
}

// Doc structure mapping: paragraphIndex -> translation key path
// Order: HOME PAGE (hero, intro, services), FAQ, ABOUT, TEAM, VALUES, FAMILY OFFICE, SERVICES, etc.
const paraToKey = {
  // HOME PAGE - Hero (17-21)
  18: 'hero.titleLine1',      // ה-CFO האישי שלכם...
  19: 'hero.subtitle',
  20: 'hero.ctaPrimary',      // buttons
  // HOME - Intro (22-27)
  23: 'intro.title',
  24: 'intro.text1',
  25: 'intro.text2',
  26: 'intro.cta',
  // HOME - Services (28-40)
  29: 'services.subtitle',
  30: 'services.card1Title', 30: 'services.card1Text',
  31: 'services.card2Title', 31: 'services.card2Text',
  32: 'services.card3Title', 32: 'services.card3Text',
  33: 'services.card4Title', 33: 'services.card4Text',
  34: 'services.card5Title', 34: 'services.card5Text',
  35: 'services.card6Title', 35: 'services.card6Text',
  // Philosophy (42-45)
  42: 'philosophy.subtitle',
  43: 'philosophy.item1Text',
  44: 'philosophy.item2Text',
  45: 'philosophy.item3Text',
  // Team (46-52)
  47: 'team.member1Name', 47: 'team.member1Role',
  48: 'team.member2Name', 48: 'team.member2Role',
  49: 'team.member3Name', 49: 'team.member3Role',
  50: 'team.member4Name', 50: 'team.member4Role',
  // Contact CTA (53-55)
  54: 'contact.ctaTitle',
  55: 'contact.text',
  // Footer (91-98)
  93: 'footer.description',
  94: 'contactPage.formTitle',
  94: 'contactPage.formSubtitle',
  // ABOUT PAGE (64-90)
  66: 'aboutPage.heroSubtitle',
  69: 'aboutPage.storyTitle',
  69: 'aboutPage.storyP1',
  70: 'aboutPage.storyP2',
  72: 'aboutPage.whatWeDoTitle',
  73: 'aboutPage.whatWeDoP1',
  74: 'aboutPage.whatWeDoP2',
  75: 'aboutPage.whatWeDoP3',
  76: 'aboutPage.standardTitle',
  77: 'aboutPage.standardItem1Title', 77: 'aboutPage.standardItem1Text',
  78: 'aboutPage.standardItem2Title', 78: 'aboutPage.standardItem2Text',
  79: 'aboutPage.standardItem3Title', 79: 'aboutPage.standardItem3Text',
  80: 'aboutPage.leadershipTitle',
  80: 'aboutPage.leadershipSubtitle',
  81: 'aboutPage.leadershipRole1',
  82: 'aboutPage.leadershipRole2',
  83: 'aboutPage.leadershipRole3',
  84: 'aboutPage.leadershipRole4',
  85: 'aboutPage.getInTouchTitle',
  85: 'aboutPage.getInTouchText',
  // TEAM FULL PAGE
  107: 'teamPageFull.heroSubtitle',
  108: 'teamPageFull.team1Name', 108: 'teamPageFull.team1Role',
  109: 'teamPageFull.team2Name', 109: 'teamPageFull.team2Role',
  110: 'teamPageFull.team3Name', 110: 'teamPageFull.team3Role',
  111: 'teamPageFull.team4Name', 111: 'teamPageFull.team4Role',
  // VALUES PAGE
  115: 'valuesPage.heroSubtitle',
  116: 'valuesPage.introText',
  117: 'valuesPage.value1Lead', 117: 'valuesPage.value1P1', 117: 'valuesPage.value1P2',
  118: 'valuesPage.value2Title', 118: 'valuesPage.value2Lead', 118: 'valuesPage.value2P1',
  119: 'valuesPage.value3Title', 119: 'valuesPage.value3Lead', 119: 'valuesPage.value3P1', 119: 'valuesPage.value3P2',
  120: 'valuesPage.value4Title', 120: 'valuesPage.value4Lead', 120: 'valuesPage.value4P1',
  121: 'valuesPage.value5Title', 121: 'valuesPage.value5Lead', 121: 'valuesPage.value5P1', 121: 'valuesPage.value5P2',
  122: 'valuesPage.promise1', 122: 'valuesPage.promise2', 122: 'valuesPage.promise3', 122: 'valuesPage.promise4', 122: 'valuesPage.promise5',
};

// Doc structure: HOME (16-61), ABOUT (64-90), Footer (91-98), TEAM (106-196), VALUES (197-251?), FAMILY OFFICE (252-280?), SERVICES (281-316?), FAQ (317+)
// Map paragraph index to translation key
function inferKey(idx, phrase, fullPara) {
  // HOME PAGE - Contact section (53-55)
  if (idx === 54) return 'contact.ctaTitle';
  if (idx === 55) return 'contact.text';
  // ABOUT PAGE
  if (idx === 66) return 'aboutPage.heroSubtitle';
  // Footer / Global contact (91-98)
  if (idx === 93) return 'nav.scheduleConsultation';  // "Let's start a conversation"
  if (idx === 94) return 'contactPage.formSubtitle';
  // TEAM PAGE (106-196): heroSubtitle=107, exec bios 110-116, team bios 117+
  if (idx === 122) return 'teamPageFull.exec3Bio1';  // Benjamin Sarkisov bio
  if (idx === 132) return 'teamPageFull.team3Role';  // Alex - Head of Data & Reporting
  // Contact form blocks on various pages (153-154, 194-195, 215-216, 251-252, 280-281)
  if (idx === 153) return 'contactPage.formTitle';
  if (idx === 154) return 'contactPage.formSubtitle';
  if (idx === 194) return 'doINeedPage.contactTitle';
  if (idx === 195) return 'doINeedPage.contactSubtitle';
  if (idx === 215) return 'choosingPage.contactTitle';
  if (idx === 216) return 'choosingPage.contactSubtitle';
  if (idx === 251) return 'familyOfficePage.formTitle';
  if (idx === 252) return 'familyOfficePage.formSubtitle';  // if exists; else form placeholder
  if (idx === 280) return 'servicesPage.contactTitle';
  if (idx === 281) return 'servicesPage.contactSubtitle';
  // FAQ (317+): a1=322-327, a2=328, a3=329-330, a4=332-333, a5=335, a6=339, a7=341, a8=343, a9=345, a10=347, etc.
  const faqMap = [
    [322, 327, 1], [328, 328, 2], [329, 331, 3], [332, 334, 4], [335, 338, 5], [339, 340, 6],
    [341, 342, 7], [343, 344, 8], [345, 346, 9], [347, 348, 10], [349, 350, 11]
  ];
  for (const [start, end, a] of faqMap) {
    if (idx >= start && idx <= end) return 'faqPage.a' + a;
  }
  if (idx >= 322 && idx <= 355) return 'faqPage.a1';  // fallback: a1 spans multiple
  return null;
}

// Group by paragraph for multi-phrase paras
const byPara = {};
for (const e of extracted) {
  if (!byPara[e.paragraphIndex]) byPara[e.paragraphIndex] = [];
  byPara[e.paragraphIndex].push(e);
}

console.log('=== EXTRACTED PHRASES (yellow | inserted) ===\n');
for (const e of extracted) {
  const ctx = paraText[e.paragraphIndex]?.slice(0, 60) || '';
  const key = inferKey(e.paragraphIndex, e.fullPhrase, paraText[e.paragraphIndex]);
  console.log(JSON.stringify({ paragraphIndex: e.paragraphIndex, fullPhrase: e.fullPhrase, type: e.type }));
  if (key) console.log('  -> ' + key);
  console.log('  context: ' + ctx + (ctx.length >= 60 ? '...' : ''));
  console.log('');
}

console.log('\n=== REPLACEMENT INSTRUCTIONS (en.he / en.<key> -> new value) ===\n');

// Load translations for context
const transPath = path.join(__dirname, '..', 'assets', 'js', 'translations.js');
let transContent = '';
try {
  transContent = fs.readFileSync(transPath, 'utf8');
} catch (_) {}

// Hebrew block in translations
const hebMatch = transContent.match(/he:\s*\{[\s\S]*?\n\s*\},?\s*\/\/\s*\w+/);
const hebBlock = hebMatch ? hebMatch[0] : '';

const replacements = [];
for (const e of extracted) {
  const key = inferKey(e.paragraphIndex, e.fullPhrase, paraText[e.paragraphIndex]);
  if (!key) continue;
  replacements.push({
    path: key,
    newValue: e.fullPhrase,
    type: e.type,
  });
}

// Dedupe by path (last wins for same key)
const seen = {};
for (let i = replacements.length - 1; i >= 0; i--) {
  const r = replacements[i];
  if (seen[r.path]) continue;
  seen[r.path] = r;
}
const unique = Object.values(seen).reverse();

for (const r of unique) {
  console.log('he.' + r.path + ' ->');
  console.log('  "' + r.newValue.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"');
  console.log('');
}

// Write output JSON
const outPath = path.join(__dirname, 'heb-remarks-extracted.json');
fs.writeFileSync(outPath, JSON.stringify({
  extracted,
  replacements: unique,
  note: 'Inserted (revision) runs not found in source JSON.',
}, null, 2));
console.log('Wrote: ' + outPath);
