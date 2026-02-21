# FWA Hebrew Replacement Instructions (from doc/New folder)

**Source:** `doc/New folder/FWA WEBSITE HEB Remarks.docx` → extracted via `doc/docx-formatting-extract.json`  
**Target:** `assets/js/translations.js` (Hebrew block: `translations.he`)

Extraction run: `node doc/extract-docx-formatting.js "doc/New folder/FWA WEBSITE HEB Remarks.docx" doc/docx-formatting-extract.json`  
Then: `node doc/extract-heb-remarks.js`

---

## 1. Extracted Yellow-Highlighted Phrases (New Folder Doc)

Paragraph indices differ from original doc due to structure.

| paragraphIndex | Key (content-based) | fullPhrase |
|---------------|--------------------|------------|
| 54 | contact.ctaTitle | בואו נדבר |
| 55 | contact.text | מוכנים להתקדם מייעוץ נקודתי לניהול אסטרטגי כולל ? |
| 71 | aboutPage.heroSubtitle | הון (use in full paragraph) |
| 98 | nav, formTitle | בואו נתחיל בשיחה |
| 99 | contactPage.formSubtitle | אנו מזמינים אתכם לשיחת היכרות אישית לבחינת התאמת השירותים שלנו לצרכי משפחתכם. השאירו פרטים למטה, ונחזור אליכם בהקדם לתיאום מועד נוח. |
| 127 | teamPageFull.exec3Bio1, team1Bio | מנהל השקעות בנימין סרקיסוב משמש כמנהל השקעות וחבר מרכזי בצוות המחקר של FWA מאז הצטרפותו בשנת 2021, בנימין רתם את הרקע המתמטי החזק שלו לטובת תהליכי בחירת ההשקעות וקבלת ההחלטות. |
| 158 | contactPage.formTitle | בואו נתחיל בשיחה |
| 159 | contactPage.formSubtitle | (same as 99) |
| 199 | doINeedPage.contactTitle | בואו נתחיל בשיחה |
| 200 | doINeedPage.contactSubtitle | אנו מזמינים אתכם לפגישת היכרות פרטית. אנא השאירו את פרטיכם למטה, ואנו ניצור קשר אישי לתיאום פגישה. |
| 220 | choosingPage.contactTitle | בואו נתחיל בשיחה |
| 221 | choosingPage.contactSubtitle | (same as 200) |
| 256 | familyOfficePage.formTitle | בואו נתחיל בשיחה |
| 257 | familyOfficePage.formSubtitle | אנו מזמינים אתכם לפגישת היכרות פרטית. השאירו פרטים, ונחזור אליכם אישית לתיאום פגישה. |
| 285 | servicesPage.formTitle | בואו נתחיל בשיחה |
| 286 | servicesPage.contactSubtitle | (same as 257) |
| 327–352 | faqPage.a1–a10 | See FAQ section below |

---

## 2. Direct Replacements (no structural change)

These match current implementation. Verify only.

| Key | Expected Value |
|-----|----------------|
| he.contact.ctaTitle | "בואו נדבר" |
| he.contact.text | "מוכנים להתקדם מייעוץ נקודתי לניהול אסטרטגי כולל ?" |
| he.aboutPage.heroSubtitle | "הון מביא איתו חופש, אך גם מורכבות. מאז שנת 2009, Family Wealth Advisors (FWA) מספקת את הבהירות האסטרטגית, התכנון המבני והשקט הנפשי המאפשרים למשפחות לשגשג לאורך דורות." |
| he.nav.scheduleConsultation | "בואו נתחיל בשיחה" |
| he.contactPage.formTitle | "בואו נתחיל בשיחה" |
| he.contactPage.formSubtitle | "אנו מזמינים אתכם לשיחת היכרות אישית לבחינת התאמת השירותים שלנו לצרכי משפחתכם. השאירו פרטים למטה, ונחזור אליכם בהקדם לתיאום מועד נוח." |
| he.doINeedPage.contactTitle | "בואו נתחיל בשיחה" |
| he.doINeedPage.contactSubtitle | "אנו מזמינים אתכם לפגישת היכרות פרטית. אנא השאירו את פרטיכם למטה, ואנו ניצור קשר אישי לתיאום פגישה." |
| he.choosingPage.contactTitle | "בואו נתחיל בשיחה" |
| he.choosingPage.contactSubtitle | "אנו מזמינים אתכם לפגישת היכרות פרטית. אנא השאירו את פרטיכם למטה, ואנו ניצור קשר אישי לתיאום פגישה." |
| he.familyOfficePage.formTitle | "בואו נתחיל בשיחה" |
| he.familyOfficePage.formSubtitle | "אנו מזמינים אתכם לפגישת היכרות פרטית. השאירו פרטים, ונחזור אליכם אישית לתיאום פגישה." |
| he.teamPageFull.exec3Bio1 | "מנהל השקעות בנימין סרקיסוב משמש כמנהל השקעות וחבר מרכזי בצוות המחקר של FWA מאז הצטרפותו בשנת 2021, בנימין רתם את הרקע המתמטי החזק שלו לטובת תהליכי בחירת ההשקעות וקבלת ההחלטות." |
| he.teamPageFull.team1Bio | (same as exec3Bio1) |
| he.teamPageFull.team3Role | "מנהל מערכות מידע ודיווח (Head of Data & Reporting)" |

---

## 3. FAQ Content Mapping (New Folder Doc)

Content-based mapping (paragraph indices 327–352):

| Key | Source paras | Notes |
|-----|--------------|-------|
| faqPage.a1 | 327, 329, 330, 331 | Conflict management: intro + 3 bullets (Rebate, Institutional, Open Architecture) |
| faqPage.a2 | 332, 333 | Licensed / משווק השקעות. Fix typos: "ה מנכ\"ל המ כהן" → "המנכ\"ל המכהן" |
| faqPage.a3 | 334, 335 | FO vs banks. Fix: "כ ארכיטקט"→"כארכיטקט", "לצ י דכם"→"לצידכם", "מ שפרים ומ תאמים"→"משפרים ומתאמים" |
| faqPage.a4 | 337, 338 | Discretionary vs FWA model |
| faqPage.a5 | 340 | More work? – "בכלל לא..." Fix: "ו מורכבות"→"ומורכבות" |
| faqPage.a6 | 344 | Family governance |
| faqPage.a7 | 346 | Fee-only |
| faqPage.a8 | 348 | Family conflicts |
| faqPage.a9 | 350 | Replace suppliers |
| faqPage.a10 | 352 | Communication frequency intro (keep bullets from current) |

---

## 4. Typos to Fix in Extracted Text

| Extracted | Correct |
|-----------|---------|
| ה מנכ"ל המ כהן | המנכ"ל המכהן |
| כ ארכיטקט | כארכיטקט |
| לצ י דכם | לצידכם |
| ה נכסים | הנכסים |
| מ שפרים ומ תאמים | משפרים ומתאמים |
| ו מורכבות | ומורכבות |
| ל קרנות | לקרנות |

---

## 5. Verification Status

After applying: run comparison against this spec. Current translations.js should already implement most items from the original HEB-REPLACEMENT-INSTRUCTIONS.md. The New folder doc yields the same phrases with minor paragraph-index shifts; content is equivalent.
