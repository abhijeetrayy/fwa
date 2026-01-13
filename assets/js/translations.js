/**
 * FWA Multilingual Translation System
 * Supports English (LTR) and Hebrew (RTL)
 */

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            aboutUs: "About Us",
            ourTeam: "Our Team",
            services: "Services",
            ourServices: "Our Services",
            ourValues: "Our Values",
            philosophy: "Philosophy",
            familyOffice: "Family Office",
            whatIsFamilyOffice: "What is a Family Office?",
            doINeedOne: "Do I Need One?",
            choosingRightOne: "Choosing the Right One",
            faq: "FAQ",
            contact: "Contact",
            scheduleConsultation: "Schedule Consultation"
        },
        // Hero Section
        hero: {
            badge: "Trusted Multi-Family Office Since 2009",
            titleLine1: "Your Personal CFO",
            titleLine2: "for Generational Wealth",
            subtitle: "We provide clarity, strategic perspective, and long-term confidence in managing your family's capital—ensuring wealth thrives across generations.",
            ctaPrimary: "Schedule Consultation",
            ctaSecondary: "Explore Services",
            trust1: "Independent & Conflict-Free",
            trust2: "Fee-Only Advisory",
            trust3: "50+ Families Served",
            scrollText: "Scroll to explore",
            stat1Number: "$500M+",
            stat1Label: "Assets Under Advisory",
            stat2Number: "15+",
            stat2Label: "Years of Excellence"
        },
        // Trust Bar
        trustBar: {
            years: "Years Experience",
            assets: "Assets Advised",
            families: "Families Served",
            retention: "Client Retention"
        },
        // Introduction Section
        intro: {
            eyebrow: "About FWA",
            title: "A Different Approach to Wealth Management",
            text1: "Family Wealth Advisors operates as an independent, fee-only multi-family office. We have no products to sell, no commissions to earn, and no conflicts of interest.",
            text2: "Our sole obligation is to you and your family. We serve as your personal CFO—coordinating all aspects of your financial life with the same care and diligence as if it were our own.",
            feature1: "100% Independent Advice",
            feature2: "Fee-Only Structure",
            feature3: "Generational Planning",
            cta: "Learn More About Us"
        },
        // Services Section
        services: {
            eyebrow: "What We Do",
            title: "Comprehensive Family Office Services",
            subtitle: "A custom framework of services tailored to your specific needs, objectives, and family circumstances.",
            card1Title: "Strategic Wealth Planning",
            card1Text: "Comprehensive strategies for protecting, growing, and transferring your family's wealth across multiple generations with clear milestones.",
            card2Title: "Investment Management",
            card2Text: "Evidence-based portfolio management with access to institutional-quality investments, global diversification, and disciplined rebalancing.",
            card3Title: "Tax Optimization",
            card3Text: "Strategic tax planning across jurisdictions to minimize liabilities, maximize after-tax returns, and ensure full regulatory compliance.",
            card4Title: "Estate & Legacy Planning",
            card4Text: "Comprehensive legacy preservation including trusts, succession planning, philanthropic giving, and seamless wealth transfer to heirs.",
            card5Title: "Family Governance",
            card5Text: "Establishing family constitutions, governance structures, and next-generation education programs to ensure unified decision-making.",
            card6Title: "Risk Management",
            card6Text: "Comprehensive risk analysis and mitigation strategies to protect your family's assets from market volatility and unforeseen events.",
            learnMore: "Learn more"
        },
        // Team Section
        team: {
            eyebrow: "Leadership",
            title: "Meet the Team",
            subtitle: "Our experienced professionals combine decades of expertise in global financial markets with a genuine commitment to your family's success.",
            viewFullTeam: "View Full Team"
        },
        // Testimonial
        testimonial: {
            quote: "FWA has been instrumental in organizing our family's complex financial situation. Their holistic approach and genuine care for our long-term success gave us peace of mind we never had before.",
            author: "The Goldstein Family",
            details: "Client since 2012 • Tel Aviv"
        },
        // FAQ Section
        faq: {
            eyebrow: "Questions",
            title: "Frequently Asked",
            q1: "What is a multi-family office and how is it different from a bank?",
            a1: "A multi-family office is an independent wealth management firm that serves multiple affluent families. Unlike banks, we have no products to sell and receive no commissions—our only obligation is to you.",
            q2: "What is your minimum investment requirement?",
            a2: "We typically work with families who have investable assets of $5 million or more. However, we evaluate each situation individually.",
            q3: "How are your fees structured?",
            a3: "We operate on a transparent, fee-only basis. Our compensation is based solely on the services we provide, not on product sales or transaction commissions."
        },
        // Contact Section
        contact: {
            eyebrow: "Get In Touch",
            title: "Start the Conversation",
            subtitle: "Ready to explore how FWA can serve your family? Schedule a confidential consultation.",
            nameLabel: "Full Name",
            emailLabel: "Email Address",
            phoneLabel: "Phone Number",
            messageLabel: "Your Message",
            submit: "Send Message"
        },
        // Footer
        footer: {
            description: "A multi-family office providing comprehensive wealth management services to high-net-worth families in Israel since 2009.",
            company: "Company",
            aboutUs: "About Us",
            ourTeam: "Our Team",
            ourValues: "Our Values",
            philosophy: "Philosophy",
            servicesTitle: "Services",
            ourServices: "Our Services",
            whatIsFamilyOffice: "What is a Family Office?",
            doINeedOne: "Do I Need One?",
            choosingRightOne: "Choosing the Right One",
            contactTitle: "Contact",
            contactUs: "Contact Us",
            faq: "FAQ",
            copyright: "© 2024 Family Wealth Advisors Ltd. All rights reserved.",
            privacyPolicy: "Privacy Policy",
            termsOfUse: "Terms of Use",
            disclosure: "Disclosure"
        },
        // Common
        common: {
            learnMore: "Learn More",
            readMore: "Read More",
            viewAll: "View All",
            backToTop: "Back to Top"
        }
    },
    he: {
        // Navigation
        nav: {
            home: "בית",
            about: "אודות",
            aboutUs: "אודותינו",
            ourTeam: "הצוות שלנו",
            services: "שירותים",
            ourServices: "השירותים שלנו",
            ourValues: "הערכים שלנו",
            philosophy: "פילוסופיה",
            familyOffice: "משרד משפחתי",
            whatIsFamilyOffice: "מהו משרד משפחתי?",
            doINeedOne: "האם אני צריך?",
            choosingRightOne: "בחירת המשרד הנכון",
            faq: "שאלות נפוצות",
            contact: "צור קשר",
            scheduleConsultation: "קבע פגישת ייעוץ"
        },
        // Hero Section
        hero: {
            badge: "משרד משפחתי מהימן מאז 2009",
            titleLine1: "המנהל הפיננסי האישי שלך",
            titleLine2: "לעושר בין-דורי",
            subtitle: "אנו מספקים בהירות, פרספקטיבה אסטרטגית וביטחון לטווח ארוך בניהול ההון המשפחתי שלך - מבטיחים שהעושר ישגשג לדורות.",
            ctaPrimary: "קבע פגישת ייעוץ",
            ctaSecondary: "גלה את השירותים",
            trust1: "עצמאיים וללא ניגודי עניינים",
            trust2: "ייעוץ בתשלום בלבד",
            trust3: "50+ משפחות שירתנו",
            scrollText: "גלול לגילוי",
            stat1Number: "$500M+",
            stat1Label: "נכסים בניהול",
            stat2Number: "15+",
            stat2Label: "שנות מצוינות"
        },
        // Trust Bar
        trustBar: {
            years: "שנות ניסיון",
            assets: "נכסים מנוהלים",
            families: "משפחות שירתנו",
            retention: "שימור לקוחות"
        },
        // Introduction Section
        intro: {
            eyebrow: "אודות FWA",
            title: "גישה שונה לניהול עושר",
            text1: "פמילי ווילת' אדוויזורס פועלת כמשרד משפחתי עצמאי בתשלום בלבד. אין לנו מוצרים למכור, אין עמלות להרוויח ואין ניגודי עניינים.",
            text2: "המחויבות היחידה שלנו היא אליך ולמשפחתך. אנו משמשים כמנהל הכספים האישי שלך - מתאמים את כל ההיבטים של החיים הפיננסיים שלך.",
            feature1: "ייעוץ עצמאי 100%",
            feature2: "מבנה תשלום בלבד",
            feature3: "תכנון בין-דורי",
            cta: "למד עוד עלינו"
        },
        // Services Section
        services: {
            eyebrow: "מה אנחנו עושים",
            title: "שירותי משרד משפחתי מקיפים",
            subtitle: "מסגרת מותאמת אישית של שירותים המותאמת לצרכים, למטרות ולנסיבות המשפחתיות הספציפיות שלך.",
            card1Title: "תכנון עושר אסטרטגי",
            card1Text: "אסטרטגיות מקיפות להגנה, הגדלה והעברת עושר משפחתך למספר דורות עם אבני דרך ברורות.",
            card2Title: "ניהול השקעות",
            card2Text: "ניהול תיקים מבוסס ראיות עם גישה להשקעות באיכות מוסדית, פיזור גלובלי ואיזון מחדש ממושמע.",
            card3Title: "אופטימיזציית מס",
            card3Text: "תכנון מס אסטרטגי בין תחומי שיפוט למזעור התחייבויות, מקסום תשואות לאחר מס והבטחת ציות מלא.",
            card4Title: "תכנון עיזבון ומורשת",
            card4Text: "שימור מורשת מקיף כולל נאמנויות, תכנון ירושה, נתינה פילנתרופית והעברת עושר חלקה ליורשים.",
            card5Title: "ממשל משפחתי",
            card5Text: "הקמת חוקות משפחתיות, מבני ממשל ותוכניות חינוך לדור הבא להבטחת קבלת החלטות מאוחדת.",
            card6Title: "ניהול סיכונים",
            card6Text: "ניתוח סיכונים מקיף ואסטרטגיות הפחתה להגנה על נכסי משפחתך מתנודתיות שוק ואירועים בלתי צפויים.",
            learnMore: "למד עוד"
        },
        // Team Section
        team: {
            eyebrow: "הנהגה",
            title: "הכירו את הצוות",
            subtitle: "אנשי המקצוע המנוסים שלנו משלבים עשרות שנים של מומחיות בשווקים הפיננסיים הגלובליים עם מחויבות אמיתית להצלחת משפחתך.",
            viewFullTeam: "צפה בצוות המלא"
        },
        // Testimonial
        testimonial: {
            quote: "FWA היה אינסטרומנטלי בארגון המצב הפיננסי המורכב של משפחתנו. הגישה ההוליסטית שלהם והאכפתיות האמיתית להצלחה ארוכת הטווח שלנו נתנו לנו שקט נפשי שמעולם לא היה לנו קודם.",
            author: "משפחת גולדשטיין",
            details: "לקוחות מאז 2012 • תל אביב"
        },
        // FAQ Section
        faq: {
            eyebrow: "שאלות",
            title: "שאלות נפוצות",
            q1: "מהו משרד רב-משפחתי ובמה הוא שונה מבנק?",
            a1: "משרד רב-משפחתי הוא חברת ניהול עושר עצמאית המשרתת מספר משפחות אמידות. בניגוד לבנקים, אין לנו מוצרים למכור ואיננו מקבלים עמלות - המחויבות היחידה שלנו היא אליך.",
            q2: "מהי דרישת ההשקעה המינימלית שלכם?",
            a2: "אנו עובדים בדרך כלל עם משפחות שיש להן נכסים להשקעה של 5 מיליון דולר ומעלה. עם זאת, אנו מעריכים כל מצב באופן אישי.",
            q3: "איך מובנות העמלות שלכם?",
            a3: "אנו פועלים על בסיס שקוף ובתשלום בלבד. התגמול שלנו מבוסס אך ורק על השירותים שאנו מספקים, לא על מכירת מוצרים או עמלות עסקאות."
        },
        // Contact Section
        contact: {
            eyebrow: "צור קשר",
            title: "התחל את השיחה",
            subtitle: "מוכן לחקור כיצד FWA יכול לשרת את משפחתך? קבע פגישת ייעוץ חסויה.",
            nameLabel: "שם מלא",
            emailLabel: "כתובת אימייל",
            phoneLabel: "מספר טלפון",
            messageLabel: "ההודעה שלך",
            submit: "שלח הודעה"
        },
        // Footer
        footer: {
            description: "משרד משפחתי המספק שירותי ניהול עושר מקיפים למשפחות עתירות הון בישראל מאז 2009.",
            company: "חברה",
            aboutUs: "אודותינו",
            ourTeam: "הצוות שלנו",
            ourValues: "הערכים שלנו",
            philosophy: "פילוסופיה",
            servicesTitle: "שירותים",
            ourServices: "השירותים שלנו",
            whatIsFamilyOffice: "מהו משרד משפחתי?",
            doINeedOne: "האם אני צריך?",
            choosingRightOne: "בחירת המשרד הנכון",
            contactTitle: "צור קשר",
            contactUs: "צור קשר",
            faq: "שאלות נפוצות",
            copyright: "© 2024 פמילי ווילת' אדוויזורס בע\"מ. כל הזכויות שמורות.",
            privacyPolicy: "מדיניות פרטיות",
            termsOfUse: "תנאי שימוש",
            disclosure: "גילוי נאות"
        },
        // Common
        common: {
            learnMore: "למד עוד",
            readMore: "קרא עוד",
            viewAll: "צפה בהכל",
            backToTop: "חזרה למעלה"
        }
    }
};

// Current language state
let currentLang = 'en';

/**
 * Initialize language system
 */
function initLanguage() {
    // Check localStorage for saved preference
    const savedLang = localStorage.getItem('fwa_language');
    const hasSelected = localStorage.getItem('fwa_language_selected');
    
    if (savedLang) {
        currentLang = savedLang;
        applyLanguage(currentLang);
    } else if (!hasSelected) {
        // Show language selection modal on first visit
        showLanguageModal();
    }
}

/**
 * Show language selection modal
 */
function showLanguageModal() {
    const modal = document.getElementById('lang-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Hide language selection modal
 */
function hideLanguageModal() {
    const modal = document.getElementById('lang-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Set language and apply changes
 * @param {string} lang - 'en' or 'he'
 */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('fwa_language', lang);
    localStorage.setItem('fwa_language_selected', 'true');
    applyLanguage(lang);
    hideLanguageModal();
}

/**
 * Apply language to page
 * @param {string} lang - 'en' or 'he'
 */
function applyLanguage(lang) {
    const html = document.documentElement;
    
    // Set direction and language
    html.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
    html.setAttribute('lang', lang);
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Update toggle buttons
    updateToggleButtons(lang);
}

/**
 * Get translation by key path
 * @param {string} keyPath - Dot-notation path like 'nav.home'
 * @param {string} lang - Language code
 * @returns {string} Translation or empty string
 */
function getTranslation(keyPath, lang) {
    const keys = keyPath.split('.');
    let value = translations[lang];
    
    for (const key of keys) {
        if (value && value[key]) {
            value = value[key];
        } else {
            return '';
        }
    }
    
    return typeof value === 'string' ? value : '';
}

/**
 * Update toggle button states
 * @param {string} lang - Current language
 */
function updateToggleButtons(lang) {
    const buttons = document.querySelectorAll('.lang-toggle__btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLang() {
    return currentLang;
}

/**
 * Toggle between languages
 */
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'he' : 'en';
    setLanguage(newLang);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initLanguage);

// Export for use in other scripts
window.FWALang = {
    setLanguage,
    getCurrentLang,
    getTranslation,
    toggleLanguage
};
