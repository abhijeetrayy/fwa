# FWA Translation & RTL / UI Alignment Audit

**Date:** February 2025  
**Scope:** Translation coverage (EN/HE), RTL layout, alignment, and visual consistency across all pages.

---

## 1. Translation system overview

- **Mechanism:** `data-i18n` attributes on elements; `translations.js` provides `en` and `he` objects; `applyLanguage(lang)` runs on load and on language switch.
- **RTL trigger:** `html.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr')` in `applyLanguage()`.
- **Fonts:** LTR uses Inter + Cormorant Garamond; RTL uses Heebo (set in CSS `html[dir="rtl"]`).

---

## 2. Translation coverage by page

| Page | data-i18n count | Notes |
|------|-----------------|-------|
| index.html | 101 | Hero, intro, services, philosophy, CTA, footer, nav, sticky contact, lang modal |
| about.html | 73 | Hero, story, what we do, standard, leadership, contact section |
| team.html | 90 | Hero, team grid, bios, form section |
| services.html | 74 | Hero, intro, 3 pillars (titles, text, bullets), How We Work (3 steps), form |
| philosophy.html | 57 | Hero, 3 pillars, quote, form (approachPage + contactPage) |
| investment-philosophy.html | 90 | Full content (investmentPhilPage) |
| values.html | 71 | Hero, 5 values, promise, form |
| family-office.html | 64 | Hero, Section 1–3, checklist, rules, form (familyOfficePage) |
| faq.html | 70 | Hero, 11 Q&A (faqPage), form |
| contact.html | 54 | Hero, form, LinkedIn card, footer |
| accessibility.html | 46 | Legal page (accessibilityPage) |
| disclosure.html | 39 | Legal page (disclosurePage) |
| privacy-terms-of-use.html | 52 | Legal page (privacyPage) |

**Translation keys:** All page-specific content uses namespaced keys (e.g. `servicesPage.*`, `approachPage.*`, `contactPage.*`, `footer.*`, `nav.*`). EN and HE objects in `translations.js` mirror the same structure.

---

## 3. RTL & alignment – what was audited and fixed

### 3.1 Header
- **Fixed:** RTL targeted `.header__container` but markup uses `.header__inner`. Added `html[dir="rtl"] .header__inner` with `flex-direction: row-reverse` so logo and nav swap sides.
- **Existing:** Nav, menu, dropdown, submenu, lang toggle already had RTL (text-align, padding, margins, border side).

### 3.2 Body & typography
- **Existing:** `html[dir="rtl"] body { text-align: right; }` for default RTL text.
- **Existing:** Hebrew font family applied on `html[dir="rtl"]`.

### 3.3 Section headers
- **Existing:** `.section-header` centered in RTL.
- **Added:** Explicit RTL for `.section-header__eyebrow`, `.section-header__title`, `.section-header__text` with `text-align: center` so headings stay centered in Hebrew.

### 3.4 Intro / content sections
- **Existing:** `.intro` has `direction: rtl` and content text-align right; odd rows use `flex-direction: row-reverse`; `.intro__feature` row-reverse.
- **Added:** `.intro__features` (checklists) gets `direction: rtl`; `.intro__feature-icon` margins normalized for RTL.

### 3.5 Services page
- **Added:** `.services__grid` gets `direction: rtl` so the three pillar cards flow right-to-left.
- **Added:** `.service-card ul` uses `padding-inline-start` / `padding-inline-end` for list alignment in RTL.
- **Added:** `.service-card::before` (gold accent line) starts from the right in RTL (`left: auto; right: 0`).
- **Existing:** `.service-card` and `.service-card__link` already had RTL text-align and icon flip.

### 3.6 Philosophy / process lists
- **Added:** `.philosophy__list` gets `direction: rtl`.
- **Added:** `.philosophy-item` uses `grid-template-columns: 1fr 100px` in RTL so the number column is on the right; `.philosophy-item__content` and `.philosophy-item__number` text alignment set for RTL.

### 3.7 Forms
- **Existing:** `.contact-form__*` had RTL text-align and input/textarea/select alignment.
- **Added:** Generic `.form__group`, `.form__label`, `.form__input`, `.form__textarea`, `.form__select` get RTL `text-align: right` and `direction: rtl` for inputs so cursor and text align correctly in Hebrew.
- **Added:** `.form__select` dropdown arrow position: `background-position: left 12px center` in RTL.

### 3.8 Footer
- **Existing:** `.footer__grid` direction rtl, brand/columns text-align right, bottom row and legal links row-reverse.

### 3.9 Sticky contact buttons
- **Added:** `.sticky-contact` position: `right: auto; left: var(--space-6)` in RTL so buttons sit on the left.
- **Added:** `.sticky-contact__btn::before` (tooltip): `right: auto; left: 60px` in RTL so tooltip appears on the correct side.

### 3.10 Lang modal
- **Added:** `.lang-modal__content` gets `text-align: right` and `direction: rtl`.
- **Added:** `.lang-modal__options` gets `flex-direction: row-reverse` for button order in RTL.

### 3.11 Lists (global)
- **Added:** `html[dir="rtl"] ul, html[dir="rtl"] ol` use `padding-inline-start` and `padding-inline-end` so list bullets/numbers sit on the correct side in RTL.

### 3.12 Other (unchanged)
- Hero, testimonial, FAQ, team grid, trust bar, calculator, buttons (with SVG flip), scroll indicator already had RTL rules.

---

## 4. Alignment and fit-and-finish checklist

- [x] **dir attribute:** Set on `<html>` when language is Hebrew (`dir="rtl"`).
- [x] **Body text:** Default RTL text alignment for Hebrew.
- [x] **Header:** Logo and nav swap sides in RTL; dropdown and lang toggle aligned.
- [x] **Section titles:** Centered in both LTR and RTL.
- [x] **Content blocks:** Intro, philosophy, and checklist sections have correct direction and text alignment in RTL.
- [x] **Services grid:** Three pillars flow right-to-left; card text and lists aligned.
- [x] **Forms:** Labels, inputs, textareas, and selects aligned and readable in RTL; placeholder and cursor direction correct.
- [x] **Footer:** Grid direction and link alignment correct in RTL.
- [x] **Sticky contact:** Position and tooltip side correct in RTL.
- [x] **Lang modal:** Content and options aligned for RTL.
- [x] **Lists:** Bullets/numbers on the correct side in RTL (inline padding).
- [x] **Icons in buttons/links:** SVG flip in RTL where needed (e.g. arrows, dropdowns).

---

## 5. Recommendations

1. **Testing:** Manually test every main page in Hebrew (עב): index, about, team, services, philosophy, investment-philosophy, values, family-office, faq, contact, and the three legal pages. Confirm no English-only strings and that layout/alignment look correct.
2. **Hard refresh:** After any JS/CSS change, use Ctrl+Shift+R (or Cmd+Shift+R) to avoid cached assets when checking RTL.
3. **Placeholders:** All form placeholders are driven by `data-i18n`; ensure each form page uses the correct namespace (e.g. `contactPage.messagePlaceholder`, `familyOfficePage.formPlaceholder`).
4. **Future pages:** Add RTL rules for any new components (e.g. new grids, cards, or forms) and use `padding-inline-*` / `margin-inline-*` where direction-dependent spacing is needed.

---

## 6. Files modified in this audit

- **assets/css/styles.css:** RTL and alignment fixes as above (header inner, forms, services grid, philosophy list, intro features, sticky contact, lang modal, section headers, lists, service-card accent).
- **TRANSLATION-AND-RTL-AUDIT.md:** This audit document.

No changes were made to `translations.js` or HTML in this audit; translation coverage was verified as already in place from previous work.
