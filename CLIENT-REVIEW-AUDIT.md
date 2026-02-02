# FWA Website – Client Review Audit

Strict audit of the current site against the client’s review text. No changes were made; this is assessment only.

---

## HOME PAGE (index.html)

| Requirement | Status | Notes |
|-------------|--------|-------|
| Remove button on top “schedule consultation” | **DONE** | No “schedule consultation” button in header or hero. Hero CTAs are “Contact Us” and “Our Services”. |
| Change “schedule a consultation” to “start the conversation” and delete the gold “start the conversation” above it, site-wide | **DONE** | No “schedule a consultation” text found. Contact section has single heading “start the conversation” (no duplicate gold + button). |
| Photo for “A Trusted Partner in Wealth Preservation” = “family sunset” | **DONE** | Section uses `images/new/familysunset.jpg`. File exists. |
| “Frequently Asked” – remove whole section from homepage; keep only under FAQ menu | **DONE** | No “Frequently Asked” section on homepage. Only nav/footer link to FAQ. |
| “Learn More” on 6 cubes – leads to nowhere | **VERIFY** | Links exist: Strategic Wealth Planning → `services.html#planning`, Investment Management → `#investment`, Tax Optimization → `#tax`, Estate & Legacy → `#planning`, Family Governance → `#governance`, Risk Management → `#planning`. On services.html, `#planning` is on section; `#tax` and `#governance` are on `<li>` elements. **Check on live site**: anchors may scroll to list items; consider section-level ids for #tax and #governance if scroll is wrong. |

---

## PAGE: FAQ (faq.html)

| Requirement | Status | Notes |
|-------------|--------|-------|
| Change whole content as specified; keep new format | **DONE** | Two sections: “General Questions” (q1–q5) and “Working with Family Wealth Advisors” (q6–q11). Questions and answers match client copy (conflicts of interest, licensed firm, family office vs bank, discretionary vs non-discretionary, more work, governance, fees, conflict, replace providers, holistic plans, communication cadence). |
| Remove “Fees & Costs” and “Getting started” sections | **DONE** | No “Fees & Costs” or “Getting started” sections; only General Questions and Working with FWA. |
| Bottom: “schedule a consultation” → “start the conversation”, delete gold “start the conversation” above | **DONE** | Form section has single heading “start the conversation” (contactPage.formTitle). No “schedule a consultation” and no duplicate gold heading. |

---

## PAGE: CONTACT US (contact.html)

| Requirement | Status | Notes |
|-------------|--------|-------|
| Change “schedule a consultation” to “start the conversation”; delete gold “start the conversation” above | **DONE** | Hero is “Contact Us” with subtitle. No “schedule a consultation”. No duplicate CTA. |

---

## PAGE: WHO WE ARE → ABOUT US (about.html)

| Requirement | Status | Notes |
|-------------|--------|-------|
| Hero: “Stewards of Your Family Legacy” (not “A Legacy of Trust…”) | **DONE** | aboutPage.heroTitle = “Stewards of Your Family Legacy”. |
| Hero subtitle: Wealth brings freedom… Since 2009… | **DONE** | Matches. |
| Our Story / “Founded on a Gap in the Market” + full copy | **DONE** | Section and copy match (Daniel Peretz, Herzliya 2009, silos, “Big Picture”, CFO premise). |
| What We Do / “From Chaos to Clarity” + full copy | **DONE** | Matches. |
| Our Standard / “Uncompromised Objectivity” + Fee-Only, Total Alignment, Fiduciary Mindset | **DONE** | Matches. |
| Leadership: “Meet Our People” + 4 photos (Daniel, Gil, On, Benjamin) horizontally | **DONE** | Section title and 4-column grid. |
| LinkedIn icon below each photo with link | **DONE** | Each of the 4 has LinkedIn link (ddperetz, gil-ben-zadok, benjamin-sarkisov, on-goldenberg). |
| “View Full Team ->” links to Our Team | **DONE** | Link to team.html; label “View Full Team ->”. |
| Get in Touch / Start the Conversation / “Ready to experience…” / Contact Us -> | **DONE** | Eyebrow “Get in Touch”, title “start the conversation”, text and “Contact Us ->” CTA. |

---

## PAGE: OUR TEAM (team.html)

| Requirement | Status | Notes |
|-------------|--------|-------|
| Daniel & Gil – no change | **DONE** | Daniel: Founder & CEO. Gil: Investment Executive. |
| Benjamin Sarkisov – “Investment Mananger” (#3) | **DONE** | Third in order; role “Investment Mananger” (client typo kept). |
| On Goldenberg – “Head of Operation” (#4) | **DONE** | Fourth; “Head of Operation”. |
| Dan Levy – “Investment & Operations Associate” (#5) | **DONE** | Fifth; role matches. |
| Alex Kromkin – “Head of Data & Reporting” | **DONE** | Matches. |
| Doron Yanir – “Controller” | **DONE** | Matches. |
| Edna Peretz – “Head of Administration” | **DONE** | Matches. |

Order in HTML: Daniel, Gil, Benjamin, On, Dan Levy, Alex, Doron, Edna. Display order matches client (1–8).

---

## PAGE: OUR SERVICES → OUR VALUES (values.html)

| Requirement | Status | Notes |
|-------------|--------|-------|
| Remove all “Value 01, 02, 03, 04…” headlines | **DONE** | No visible “Value 01/02…”; section titles are Uncompromised Objectivity, Radical Transparency, etc. (HTML comments still say “Value 1: Independence” etc.; not visible.) |
| Uncompromised Objectivity (instead of Independence) + full copy | **DONE** | Title and body match. |
| Radical Transparency (instead of Integrity) + full copy | **DONE** | Matches. |
| Intellectual Rigor (instead of competence) + full copy | **DONE** | Matches. |
| Generational Mindset (instead of Sustainability) + full copy | **DONE** | Matches. |
| Total Alignment (instead of Alignment of Interests) + full copy | **DONE** | Matches (100% Rebate, “behind your back”). |

---

## PAGE: OUR PHILOSOPHY & INVESTMENT PHILOSOPHY

| Requirement | Status | Notes |
|-------------|--------|-------|
| Copy whole content of philosophy page to investment-philosophy page; delete current investment-philosophy content (evidence base, risk-reward, etc.) | **WRONG** | **investment-philosophy.html** still has the old content: hero “Investment Philosophy”, “Our Core Beliefs” (Markets Work, Risk & Return, Diversification), “What We Do Differently” (Avoid vs Embrace). It should show the same content as philosophy.html (Our Approach: Architecture of Wealth, 3 Pillars, quote). |
| philosophy.html: Remove “How We Implement” (process) section | **DONE** | No “How We Implement” / process section on philosophy.html. |
| Replace Warren Buffett quote with “Someone is sitting in the shade today because someone planted a tree a long time ago.” (Buffett) | **DONE** | philosophy.html has this quote and “Warren Buffett”. |
| New page title: “Our Philosophy” → “Our Approach” | **DONE** | philosophy.html title “Our Approach”; nav “Our Approach”. |
| Headline: “The Architecture of Wealth” | **DONE** | approachPage.heroTitle. |
| Introduction (Personal CFO, integration…) | **DONE** | Matches. |
| The 3 Pillars: 1. Integration (The Glue), 2. Risk Management (The Shield), 3. Simplicity (The Clarity) | **DONE** | Titles and text match. |

---

## PAGE: OUR SERVICES (services.html)

| Requirement | Status | Notes |
|-------------|--------|-------|
| “Comprehensive Family Office Services” | **DONE** | Hero title. |
| “Your Personal CFO” / “The Framework for Generational Wealth” + current photo | **DONE** | Intro and image in place. |
| The 3 Pillars (side-by-side): Integrated Planning (with bullets), Investment Management (The Engine), Execution & Oversight (The Peace of Mind) | **DONE** | Three pillars with correct titles and bullets (Integrated Planning: foundation + Holistic Wealth Strategy, Tax & Estate Optimization, Family Governance; Investment Management: 3 bullets; Execution & Oversight: 3 bullets). |
| How We Work: 3 stages – Discovery, Strategy, Execution (client wording) | **DONE** | “Discovery”, “Strategy”, “Execution” with correct short copy (e.g. “Wealth Blueprint”). |

---

## PAGE: FAMILY OFFICE → “FAMILY OFFICE ESSENTIAL” (family-office.html)

| Requirement | Status | Notes |
|-------------|--------|-------|
| Single page; delete old 3 pages (what is family office, do i need, choosing the right) | **DONE** | Only family-office.html under Family Office; no separate “what is” / “do i need” / “choosing” pages. |
| Hero: Title “The Private Office Standard”, Subtitle “Move beyond traditional banking. Experience the precision of a Personal CFO.”, Photo “Meeting Room” | **DONE** | Title/subtitle match; image `images/new/office.png` (confirm this is the “Meeting Room” asset). |
| Section 1: “What is a Family Office?” / “Your Financial Ecosystem, Unified.” + Tree Photo | **DONE** | Section and headline; image `images/new/tree.png`. |
| Section 2: “The Checklist” / “Is a Family Office Right for You?” + bullets (Complexity, Time, Coordination, Generational Worry, Oversight) | **DONE** | Structure and bullets present. |
| Section 3: “How to Choose” / “The Golden Rules of Selection” + Radical Independence, Total Alignment, Holistic Oversight + FWA Standard lines | **DONE** | Structure and content match. |

---

## SUMMARY

### Done correctly
- Home: no schedule-consultation button; “start the conversation” only; family sunset image; no FAQ section; FAQ/Contact/About/Team/Values/Philosophy/Family Office content and structure per spec.
- FAQ: full Q&A set; no Fees & Costs or Getting started sections; bottom CTA “start the conversation”.
- About: hero, story, What We Do, Our Standard, Leadership (4 people, LinkedIn, View Full Team, Get in Touch).
- Team: order and titles (Daniel, Gil, Benjamin, On, Dan Levy, Alex, Doron, Edna) with correct roles including “Investment Mananger”.
- Values: no “Value 01…” visible; five values with correct titles and copy.
- Philosophy: Our Approach, Architecture of Wealth, 3 pillars, tree quote, no How We Implement.
- Services: hero, 3 pillars, How We Work 3 stages.
- Family Office: single “Family Office Essential” page with hero, 3 sections, correct copy and images.

### Wrong
- **Investment Philosophy page (investment-philosophy.html)**  
  Still shows the old “Investment Philosophy” / evidence-based content (Core Beliefs, Avoid vs Embrace). It should show the same content as philosophy.html (Our Approach: The Architecture of Wealth, 3 Pillars, Buffett tree quote). Replace the main content of investment-philosophy.html with the philosophy (Our Approach) content.

### To verify / minor
- **Learn More links (homepage cubes)**  
  Links go to services.html with #planning, #investment, #tax, #governance. On services.html, `#tax` and `#governance` are on `<li>` elements. If the client sees “leads to nowhere”, check on the live URL (e.g. abhijeetrayy.github.io) and consider moving ids to section/wrapper elements so scrolling is clear.
- **Family Office hero image**  
  Client asked for “Meeting Room”; site uses `office.png`. Confirm with assets that this is the correct file.

---

*Audit completed against client review text. No edits were made to the site.*
