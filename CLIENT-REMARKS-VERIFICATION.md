# FWA Website – Client Remarks Verification Checklist

Verification against **FWA WEBSITE ENG Remarks.docx** (client: dannyp@fwa.co.il).  
**Final ENG remarks** from Danny are in this document (cyan highlight + blue text). Extracted list: **doc/ENG-FINAL-REMARKS.md**.

**Hebrew (HEB) version:** **doc/FWA WEBSITE HEB Remarks.docx** was extracted with Track Changes and yellow highlight using a Node script.  
- **Extracted output:** **doc/HEB-FINAL-REMARKS.md**  
- **How to re-extract:** From project root run `npm run extract-heb` (requires `npm install` once).  
- **Client instructions from the HEB doc:**  
  - **Red (Track Changes):** Use the *inserted* text as the correction; ignore deleted text.  
  - **Yellow highlight:** Use the client’s text instead of any AI translation — replace site copy with these exact phrases where they apply.

---

## HOME PAGE

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Remove button on top "schedule consultation" | ✅ N/A | No "schedule consultation" button exists in header; only "Contact Us" in nav. |
| 2 | Change "schedule a consultation" to "start the conversation" and delete duplicate "start the conversation" (in gold) on all places | ✅ Done | All CTAs use **"Let's start a conversation"** (per later client note). No duplicate gold CTA. |
| 3 | Photo for "A Trusted Partner in Wealth Preservation" – use "family sunset" | ✅ Done | `index.html` uses `images/new/familysunset.jpg` for intro section. |
| 4 | "Frequently Asked" – remove whole section from homepage; keep only under FAQ menu | ✅ Done | Homepage has no FAQ section; only nav link to FAQ. |
| 5 | "Learn More" on 6 cubes – leads to nowhere | ✅ Done | All 6 cards link to `services.html#planning`, `#investment`, `#tax`, `#governance`; IDs exist on services.html. |
| 6 | What We Do – Family Governance card text | ✅ Done | Text: *"Establishing family constitutions, governance structures, and next-generation education programs to prevent conflict and ensure continuity."* (translations + index fallback). |
| 7 | Contact section – replace "Ready to explore how a dedicated family office..." with "Ready to move from fragmented advice to a unified strategy?" | ✅ Done | `contact.text` in translations + index fallback. |
| 8 | CTA title "start the conversation" → "Let's start a conversation" | ✅ Done | `contact.ctaTitle` and all form titles use "Let's start a conversation". |

---

## FAQ PAGE

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Change whole content (General Questions + Working with FWA) | ✅ Done | FAQ content matches client Q&As (q1–a11). |
| 2 | Remove "Fees & Costs" and "Getting started" sections | ✅ Done | FAQ HTML has only 2 sections: General Questions, Working with FWA. |
| 3 | Bottom: "schedule a consultation" → "start the conversation"; delete duplicate gold "start the conversation" | ✅ Done | Form section uses "Let's start a conversation" + new form intro. |
| 4 | Replace "Start the conversation" with "Let's start a conversation" | ✅ Done | All form titles use "Let's start a conversation". |
| 5 | Replace form intro with "We invite you to a private introductory meeting..." | ✅ Done | `contactPage.formSubtitle` everywhere. |

---

## CONTACT PAGE

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Same CTA changes as above (schedule → start the conversation, no duplicate gold) | ✅ Done | No schedule button; form uses "Let's start a conversation" + new form intro. |
| 2 | Form intro text | ✅ Done | Same replacement as FAQ. |

---

## ABOUT US (Who We Are → About Us)

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Title: "Stewards of Your Family Legacy" (instead of A Legacy of Trust & Generational Thinking) | ✅ Done | Hero title + Structural Oversight in subtitle. |
| 2 | Our Story: "Professional Management for Your Personal Wealth" | ✅ Done | `aboutPage.storyTitle` + HTML fallback. |
| 3 | Our Story paragraphs (disconnect, oversight, objective orchestration) | ✅ Done | storyP2, storyP3, storyP4 updated. |
| 4 | What We Do: "From Complexity to Clarity" + "We do not just manage portfolios; we manage the entire family enterprise." | ✅ Done | whatWeDoTitle, whatWeDoP1 (+ HTML fallback). |
| 5 | Our Standard: "Uncompromised Objectivity" (Fee-Only, Total Alignment, Fiduciary) | ✅ Done | standardTitle + 3 items. |
| 6 | Leadership: "Meet Our People" + "wealth structuring" in subtitle | ✅ Done | leadershipTitle, leadershipSubtitle. |
| 7 | Add LinkedIn icon below each photo with link to employee LinkedIn | ✅ Done | About page has LinkedIn links for Daniel, Gil, Benjamin, On. |
| 8 | "View Full Team" → link to "our team" | ✅ Done | Links to `team.html`. |
| 9 | Get in Touch: "Start the Conversation" / "Let's discuss the architecture of your family's future. Contact Us ->" | ✅ Done | getInTouchTitle, getInTouchText. |

---

## OUR TEAM

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Daniel & Gil – no change | ✅ Done | Founder & CEO, Investment Executive. |
| 2 | Benjamin Sarkisov – "Investment Mananger" #3 | ✅ Done | Order and title in team.html + translations. |
| 3 | On Goldenberg – "Head of Operation" #4 | ✅ Done | Order and title. |
| 4 | Dan Levy – "Investment & Operations Associate" #5 | ✅ Done | Present with correct title. |
| 5 | Alex Kromkin – "Head of Data & Reporting" | ✅ Done | teamPageFull.team3Role. |
| 6 | Doron Yanir – "Controller" | ✅ Done | teamPageFull.team2Role. |
| 7 | Edna Peretz – "Head of Administration" | ✅ Done | teamPageFull.team5Role. |
| 8 | Bottom CTA/form | ✅ Done | "Let's start a conversation" + new form intro. |

---

## OUR VALUES (Our Services → Our Values)

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Remove all "Value 01, 02, 03, 04..." headlines | ✅ Done | valuesPage + valuesPageFull: value1–5 eyebrows cleared; titles only. |
| 2 | Uncompromised Objectivity (instead of Independence) + copy | ✅ Done | value1Title, value1Lead, value1P1, value1P2. |
| 3 | Radical Transparency (instead of Integrity) + copy | ✅ Done | value2Title, value2Lead, value2P1. |
| 4 | Intellectual Rigor (instead of competence) + copy | ✅ Done | value3Title, value3Lead, value3P1, value3P2. |
| 5 | Generational Mindset (instead of Sustainability) + copy | ✅ Done | value4Title, value4Lead, value4P1. |
| 6 | Total Alignment (instead of Alignment of Interests) + copy | ✅ Done | value5Title, value5Lead, value5P1. |

---

## OUR APPROACH (Philosophy page)

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Page title: "Our Approach" (not "Our Philosophy") | ✅ Done | Nav + page use "Our Approach". |
| 2 | Headline: "The Architecture of Wealth" | ✅ Done | approachPage.heroTitle. |
| 3 | Intro (Personal CFO, legal/tax/family goals, unified ecosystem) | ✅ Done | approachPage.heroSubtitle. |
| 4 | 3 Pillars: Total Alignment, Risk Management, Clarity & Control + client copy | ✅ Done | pillar1–3 Title/Text. |
| 5 | Replace Buffett quote with "Someone is sitting in the shade today because someone planted a tree a long time ago." (Warren Buffett) | ✅ Done | approachPage.quote, quoteAuthor on philosophy.html. |
| 6 | Contact section | ✅ Done | "Let's start a conversation" + new form intro. |

---

## INVESTMENT PHILOSOPHY PAGE

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Copy content from Philosophy (Our Approach) page | ✅ Done | Same hero, 3 pillars (Architecture of Wealth). |
| 2 | Delete current content (evidence base, risk-reward, etc.) | ✅ Done | Page uses approachPage content. |
| 3 | Remove section "Process – How We Implement" | ✅ Done | investment-philosophy.html has no Process section. |
| 4 | Replace quote with "Risk comes from not knowing what you are doing." — Warren Buffett | ✅ Done | approachPage.quoteInvPhil, quoteInvPhilAuthor on investment-philosophy.html only. |
| 5 | Page title "Our Investment Philosophy" | ✅ Done | <title> and content. |

---

## OUR SERVICES PAGE

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Hero: "Orchestrating Your Financial Life" | ✅ Done | servicesPage.heroTitle. |
| 2 | Replace "In an era of global economic shifts..." with "We provide the architectural framework for your family enterprise—integrating investment, tax, and legacy strategies into a single, cohesive plan." | ✅ Done | servicesPage.heroSubtitle. |
| 3 | Your Personal CFO – keep current photo | ✅ Done | services-planning-family.png kept. |
| 4 | The Framework for Generational Wealth (chaos → single strategy, orchestration) | ✅ Done | introP1, introP2. |
| 5 | 3 Pillars: Wealth Structuring, Investment Management, Implementation & Oversight (side-by-side, bullets) | ✅ Done | pillar1–3 Title/Text/Bullets per client. |
| 6 | How We Work: 3 stages – Diagnostic, Strategy, Implementation (not 5) | ✅ Done | step1Title/Text = Diagnostic, step2 = Strategy, step3 = Implementation. |
| 7 | Contact section | ✅ Done | "Let's start a conversation" + new form intro. |

---

## FAMILY OFFICE

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | Delete all 3 pages (what is family office, do i need, choosing the right one) | ✅ Done | Only one page exists: family-office.html. Nav has single item "Family Office Essential". |
| 2 | One page: "Family Office Essential" | ✅ Done | family-office.html. |
| 3 | Hero: "The Private Office Standard" / "Move beyond traditional banking. Experience the precision of a Personal CFO." | ✅ Done | familyOfficePage.heroTitle, heroSubtitle. |
| 4 | Section 1: What is a Family Office – "Your Financial Ecosystem, Unified." + copy | ✅ Done | section1Title, section1Text. |
| 5 | Section 2: The Checklist – "Is a Family Office Right for You?" + bullets | ✅ Done | section2Title, section2Subtitle, check1–5. |
| 6 | Section 3: How to Choose – "The Golden Rules of Selection" + bullets | ✅ Done | section3Title, section3Subtitle, rule1–3 Q/A. |
| 7 | Contact: "Let's start a conversation" + form intro | ✅ Done | contact.ctaTitle, contact.text. |

---

## GLOBAL (all places)

| # | Client request | Status | Notes |
|---|----------------|--------|--------|
| 1 | "Start the conversation" → "Let's start a conversation" | ✅ Done | contact.ctaTitle, contactPage.formTitle (all blocks). |
| 2 | "Fill out the form below and one of our advisors will reach out..." → "We invite you to a private introductory meeting to explore if FWA is the right partner for your family. Please leave your details below, and we will be in touch personally to schedule a time." | ✅ Done | contactPage.formSubtitle in all contact/form blocks (en). |

---

## Summary

- **All checklist items from the client document are implemented or confirmed N/A** (e.g. no "schedule consultation" button to remove, no FAQ block on homepage to remove, no separate Family Office subpages).
- **Learn More** on the 6 cubes point to `services.html` with valid anchors (`#planning`, `#investment`, `#tax`, `#governance`); if they previously "led nowhere," it may have been on another URL or build.
- **Hebrew (HEB) remarks** are in **doc/FWA WEBSITE HEB Remarks.docx**. Extracted to **doc/HEB-FINAL-REMARKS.md** (full text with Track Changes applied + list of yellow-highlighted phrases to use instead of AI translation).

**HEB extraction verification (deep check):**
- **Done with Node:** `doc/extract-heb-remarks.js` uses `jszip` (read docx) and `fast-xml-parser` (parse `word/document.xml`). Run: `npm run extract-heb`.
- **Track Changes (red):** Script uses `w:ins` (inserted) as the correction and omits `w:del` (deleted). Full-text section = final version per client.
- **Yellow highlight:** All runs with `w:highlight w:val="yellow"` are collected (paragraph walk + full-tree scan). 106 unique phrases in **doc/HEB-FINAL-REMARKS.md** — use these on the HEB site instead of AI translation.
- **Client wording reflected:** Output file states (1) use inserted text for red changes, (2) use client’s text for yellow-highlighted phrases instead of AI translation.

**HEB site implementation (deep check):** Cross-checked and **updated per client:**
- **contact.text:** → "מוכנים להתקדם מייעוץ נקודתי לניהול אסטרטגי כולל. אנו מזמינים אתכם לפגישת היכרות פרטית. השאירו פרטים, ונחזור אליכם אישית לתיאום פגישה".
- **contactPage.formSubtitle** (all HEB blocks): → "אנו מזמינים אתכם לפגישת היכרות פרטית. השאירו פרטים, ונחזור אליכם אישית לתיאום פגישה".
- **contactPage.formTitle** (HEB): → "בואו נתחיל בשיחה".
- **Benjamin bio:** → "חבר מרכזי" + "מאז הצטרפותו בשנת 2021, בנימין רתם את הרקע המתמטי החזק שלו לטובת תהליכי בחירת ההשקעות וקבלת ההחלטות".

If you want to double-check a specific page or string, say which one and we can re-verify.
