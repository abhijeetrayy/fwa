# FWA Hebrew Replacement Instructions

**Source:** `doc/docx-formatting-extract.json` (from `doc/FWA WEBSITE HEB Remarks.docx` or `doc/New folder/FWA WEBSITE HEB Remarks.docx` — run `npm run extract-new-folder` for New folder)  
**Target:** `assets/js/translations.js` (Hebrew block: `translations.he`)

**Note:** No track-change inserted text (`revision === "inserted"`) was found in the source JSON.

---

## 1. Extracted Yellow-Highlighted Phrases (Structured List)

| paragraphIndex | type   | fullPhrase |
|----------------|--------|------------|
| 54 | yellow | בואו נדבר |
| 55 | yellow | מוכנים להתקדם מייעוץ נקודתי לניהול אסטרטגי כולל ? |
| 66 | yellow | הון |
| 93 | yellow | בואו נתחיל בשיחה |
| 94 | yellow | אנו מזמינים אתכם לשיחת היכרות אישית לבחינת התאמת השירותים שלנו לצרכי משפחתכם . השאירו פרטים למטה , ונחזור אליכם בהקדם לתיאום מועד נוח . |
| 122 | yellow | מנהל השקעות בנימין סרקיסוב משמש כמנהל השקעות וחבר מרכזי בצוות המחקר של FWA מאז הצטרפותו בשנת 2021, בנימין רתם את הרקע המתמטי החזק שלו לטובת תהליכי בחירת ההשקעות וקבלת ההחלטות . |
| 132 | yellow | מנהל מערכות מידע ודיווח (Head of Data & Reporting) |
| 153 | yellow | בואו נתחיל בשיחה |
| 154 | yellow | אנו מזמינים אתכם לשיחת היכרות אישית לבחינת התאמת השירותים שלנו לצרכי משפחתכם . השאירו פרטים למטה , ונחזור אליכם בהקדם לתיאום מועד נוח . |
| 194 | yellow | בואו נתחיל בשיחה |
| 195 | yellow | אנו מזמינים אתכם לפגישת היכרות פרטית . אנא השאירו את פרטיכם למטה , ואנו ניצור קשר אישי לתיאום פגישה . |
| 215 | yellow | בואו נתחיל בשיחה |
| 216 | yellow | אנו מזמינים אתכם לפגישת היכרות פרטית . אנא השאירו את פרטיכם למטה , ואנו ניצור קשר אישי לתיאום פגישה . |
| 251 | yellow | בואו נתחיל בשיחה |
| 252 | yellow | אנו מזמינים אתכם לפגישת היכרות פרטית . השאירו פרטים , ונחזור אליכם אישית לתיאום פגישה . |
| 280 | yellow | בואו נתחיל בשיחה |
| 281 | yellow | אנו מזמינים אתכם לפגישת היכרות פרטית . השאירו פרטים , ונחזור אליכם אישית לתיאום פגישה . |
| 322–347 | yellow | (FAQ answers a1–a10 – see replacements below) |

---

## 2. Replacement Instructions (key path → new value)

Apply these updates in `assets/js/translations.js` under the `he` object.

### Home Page / Contact

| Key Path | New Value |
|----------|-----------|
| `he.contact.ctaTitle` | `"בואו נדבר"` |
| `he.contact.text` | `"מוכנים להתקדם מייעוץ נקודתי לניהול אסטרטגי כולל ?"` |

### About Page

| Key Path | New Value |
|----------|-----------|
| `he.aboutPage.heroSubtitle` | `"הון מביא איתו חופש, אך גם מורכבות. מאז שנת 2009, Family Wealth Advisors (FWA) מספקת את הבהירות האסטרטגית, התכנון המבני והשקט הנפשי המאפשרים למשפחות לשגשג לאורך דורות."` *(Only "הון" was yellow; use full paragraph for subtitle.)* |

### Navigation / Footer (Let's start a conversation)

| Key Path | New Value |
|----------|-----------|
| `he.nav.scheduleConsultation` | `"בואו נתחיל בשיחה"` |
| `he.contactPage.formTitle` | `"בואו נתחיל בשיחה"` |
| `he.contactPage.formSubtitle` | `"אנו מזמינים אתכם לשיחת היכרות אישית לבחינת התאמת השירותים שלנו לצרכי משפחתכם. השאירו פרטים למטה, ונחזור אליכם בהקדם לתיאום מועד נוח."` |
| `he.aboutPage.getInTouchTitle` | `"בואו נתחיל בשיחה"` |
| `he.doINeedPage.contactTitle` | `"בואו נתחיל בשיחה"` |
| `he.doINeedPage.contactSubtitle` | `"אנו מזמינים אתכם לפגישת היכרות פרטית. אנא השאירו את פרטיכם למטה, ואנו ניצור קשר אישי לתיאום פגישה."` |
| `he.choosingPage.contactTitle` | `"בואו נתחיל בשיחה"` |
| `he.choosingPage.contactSubtitle` | `"אנו מזמינים אתכם לפגישת היכרות פרטית. אנא השאירו את פרטיכם למטה, ואנו ניצור קשר אישי לתיאום פגישה."` |
| `he.familyOfficePage.formTitle` | `"בואו נתחיל בשיחה"` |
| `he.servicesPage.formTitle` | `"בואו נתחיל בשיחה"` |

*If `familyOfficePage`/`servicesPage` have a form or contact subtitle, use:*  
`"אנו מזמינים אתכם לפגישת היכרות פרטית. השאירו פרטים, ונחזור אליכם אישית לתיאום פגישה."`

### Team Page

| Key Path | New Value |
|----------|-----------|
| `he.teamPageFull.exec3Bio1` | `"מנהל השקעות בנימין סרקיסוב משמש כמנהל השקעות וחבר מרכזי בצוות המחקר של FWA מאז הצטרפותו בשנת 2021, בנימין רתם את הרקע המתמטי החזק שלו לטובת תהליכי בחירת ההשקעות וקבלת ההחלטות."` |
| `he.teamPageFull.team1Bio` | *(same as exec3Bio1 – Benjamin Sarkisov)* |
| `he.teamPageFull.team3Role` | `"מנהל מערכות מידע ודיווח (Head of Data & Reporting)"` |

### FAQ Page (a1–a10)

The FAQ answers in the doc use HTML structure. Merge the yellow phrases into the corresponding HTML for each answer.

| Key Path | New Value |
|----------|-----------|
| `he.faqPage.a1` | Combine paras 322+324+325+326 into HTML structure matching en.faqPage.a1 (intro + 3 bullets: Rebate, Logistical Advocacy, Open Architecture). |
| `he.faqPage.a2` | `"בעוד שפעילות ספציפית זו אינה מצריכה רישיון תאגידי, המנכ\"ל המכהן שלנו, דניאל פרץ, הוא בעל רישיון משווק השקעות מטעם רשות ניירות ערך. מבנה זה מאפשר לנו להציע את הגמישות והתחכום של Family Office, תוך הבטחה שכל פעולות שיווק ההשקעות המוסדרות מבוצעות על ידי בעל רישיון מקצועי. בשל הזיקות האסטרטגיות שלנו למוסדות פיננסיים מובילים, אנו פועלים תחת הגדרת \"משווק השקעות\", מה שמבטיח שקיפות מלאה לגבי הקשרים שלנו."` |
| `he.faqPage.a3` | Merge paras 329+330. Second paragraph: `"איננו מחליפים את הספקים הקיימים, אלא משפרים ומתאמים ביניהם. בזכות הזיקות האסטרטגיות שלנו, אנו משמשים כגשר להזדמנויות מוסדיות ולתנאים שלרוב אינם נגישים ללקוחות פרטיים בבנק – ומבטיחים שתקבלו את המיטב שהשוק מציע כחלק מתוכנית משפחתית משולבת."` |
| `he.faqPage.a4` | Merge paras 332+333. |
| `he.faqPage.a5` | `"בכלל לא. חשבו על זה כעל \"יותר שליטה, פחות אדמיניסטרציה\". אנו מבחינים בין \"עבודה\" לבין \"קבלת החלטות\". אנחנו מטפלים ב-100% מהעבודה – מחקר, ניהול ומעקב, תיאום מול בנקים וביצוע. תפקידכם עולה לרמת ההנהלה - אתם בוחנים המלצות ברורות ומעניקים את ה\"אור הירוק\"."` |
| `he.faqPage.a6` | `"בהחלט. אנו מאמינים שהכשרת המשפחה לקראת ההון חשובה לא פחות מניהול ושימור ההון עבור המשפחה. אנו בונים חוויות למידה מותאמות ומנחים מפגשים משפחתיים המתמקדים בניהול קבלת החלטות, תכנון ירושה וחינוך פיננסי לדור הצעיר."` |
| `he.faqPage.a7` | `"אנו פועלים במודל שקוף של עמלה בלבד (Fee-Only). שלא כמו מודלים מסורתיים הנשענים על עמלות נסתרות, שכר הטרחה שלנו מסוכם מראש ומבוסס על היקף ומורכבות המערך הפיננסי שלכם. איננו גובים דמי הצלחה (Performance Fees), כדי להימנע מהפיתוי לקחת סיכונים מיותרים עם ההון שלכם לצורך השגת תשואות קצרות טווח."` |
| `he.faqPage.a8` | `"אנו פועלים כצד שלישי ניטרלי המגשר על פערים בין דורות. על ידי יצירת פרוטוקולים ברורים לקבלת החלטות ותקשורת פתוחה, אנו עוזרים לבני המשפחה להרגיש שותפים ולא \"מנוטרלים\", מה שמפחית משמעותית את החיכוך."` |
| `he.faqPage.a9` | `"ממש לא. אנו אפילו מעודדים פיזור נכסים בין מספר בנקים. איננו מחליפים את הבנקים שלכם; אנו מנהלים אותם עבורכם. אנו פועלים כנציגים שלכם ומפקחים על כל הספקים כדי לוודא שהם נשארים תחרותיים ומסונכרנים עם האסטרטגיה הרחבה שלכם."` |
| `he.faqPage.a10` | `"אנו מתאימים את התדירות להעדפתכם, אך הסטנדרט שלנו כולל:"` |

---

## 3. Quick Reference: Exact Values for Copy-Paste

```javascript
// Contact (home)
he.contact.ctaTitle = "בואו נדבר";
he.contact.text = "מוכנים להתקדם מייעוץ נקודתי לניהול אסטרטגי כולל ?";

// About (full paragraph; only "הון" was yellow in doc)
he.aboutPage.heroSubtitle = "הון מביא איתו חופש, אך גם מורכבות. מאז שנת 2009, Family Wealth Advisors (FWA) מספקת את הבהירות האסטרטגית, התכנון המבני והשקט הנפשי המאפשרים למשפחות לשגשג לאורך דורות.";

// Nav / CTA (multiple pages)
he.nav.scheduleConsultation = "בואו נתחיל בשיחה";
he.contactPage.formTitle = "בואו נתחיל בשיחה";
he.contactPage.formSubtitle = "אנו מזמינים אתכם לשיחת היכרות אישית לבחינת התאמת השירותים שלנו לצרכי משפחתכם. השאירו פרטים למטה, ונחזור אליכם בהקדם לתיאום מועד נוח.";
he.doINeedPage.contactTitle = "בואו נתחיל בשיחה";
he.doINeedPage.contactSubtitle = "אנו מזמינים אתכם לפגישת היכרות פרטית. אנא השאירו את פרטיכם למטה, ואנו ניצור קשר אישי לתיאום פגישה.";
he.choosingPage.contactTitle = "בואו נתחיל בשיחה";
he.choosingPage.contactSubtitle = "אנו מזמינים אתכם לפגישת היכרות פרטית. אנא השאירו את פרטיכם למטה, ואנו ניצור קשר אישי לתיאום פגישה.";
he.familyOfficePage.formTitle = "בואו נתחיל בשיחה";

// Team
he.teamPageFull.exec3Bio1 = "מנהל השקעות בנימין סרקיסוב משמש כמנהל השקעות וחבר מרכזי בצוות המחקר של FWA מאז הצטרפותו בשנת 2021, בנימין רתם את הרקע המתמטי החזק שלו לטובת תהליכי בחירת ההשקעות וקבלת ההחלטות.";
he.teamPageFull.team1Bio = "מנהל השקעות בנימין סרקיסוב משמש כמנהל השקעות וחבר מרכזי בצוות המחקר של FWA מאז הצטרפותו בשנת 2021, בנימין רתם את הרקע המתמטי החזק שלו לטובת תהליכי בחירת ההשקעות וקבלת ההחלטות.";
he.teamPageFull.team3Role = "מנהל מערכות מידע ודיווח (Head of Data & Reporting)";
```

---

**Generated by:** `node doc/extract-heb-remarks.js`  
**Output files:** `doc/heb-remarks-extracted.json`, `doc/HEB-REPLACEMENT-INSTRUCTIONS.md`
