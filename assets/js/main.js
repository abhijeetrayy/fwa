/**
 * Family Wealth Advisors - Enhanced Interactive JS
 * Premium UX with ROI Calculator
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // Header Scroll Effect
    // ================================
    // ================================
    // Header Scroll Effect
    // ================================
    const header = document.getElementById('header');
    
    function handleHeaderScroll() {
        // Only toggle scroll effect if the header is meant to be transparent initially (has header--light class like on homepage)
        // Or if we want to enforce scroll behavior on all pages but respect the initial state differently.
        // Better approach: If page is NOT homepage (doesn't have header--light), keep header--scrolled.
        
        const isHomepage = header.classList.contains('header--light');
        
        if (isHomepage) {
            if (window.scrollY > 80) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        } else {
            // For other pages, ensure header--scrolled is always present
            if (!header.classList.contains('header--scrolled')) {
                header.classList.add('header--scrolled');
            }
        }
    }
    
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    // Initial check
    if (header) {
        handleHeaderScroll();
    }

    // ================================
    // Mobile Menu Toggle
    // ================================
    const headerToggle = document.getElementById('header-toggle');
    const headerNav = document.querySelector('.header__nav');
    
    if (headerToggle && headerNav) {
        headerToggle.addEventListener('click', function() {
            headerNav.classList.toggle('active');
            headerToggle.classList.toggle('active');
            document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Handle links
        headerNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // If it's a parent link '#' on mobile, preventing default is technically not needed 
                // if we don't have toggle logic, but good for safety. 
                // However, since it's always open, user might click it expecting something. 
                // But it's just a label now.
                if (href === '#' && window.innerWidth <= 1024) {
                    e.preventDefault();
                    return;
                }

                // For actual links, close the menu
                if (href !== '#') {
                    headerNav.classList.remove('active');
                    headerToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // ================================
    // Smooth Scroll for Anchor Links
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ================================
    // Scroll Reveal Animations
    // ================================
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple reveals
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // ================================
    // FAQ Accordion (supports both class naming conventions)
    // ================================
    
    // FAQ Page (uses .faq__item and .faq__question)
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items in the same FAQ container
                const parentFaq = item.closest('.faq');
                if (parentFaq) {
                    parentFaq.querySelectorAll('.faq__item').forEach(faq => faq.classList.remove('active'));
                }
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
    
    // Homepage FAQ (uses .faq-item and .faq-item__question)
    const homeFaqItems = document.querySelectorAll('.faq-item');
    
    homeFaqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items in the same FAQ list
                const parentList = item.closest('.faq__list');
                if (parentList) {
                    parentList.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
                }
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ================================
    // ROI Calculator
    // ================================
    const initialSlider = document.getElementById('initial-slider');
    const contributionSlider = document.getElementById('contribution-slider');
    const yearsSlider = document.getElementById('years-slider');
    const returnSlider = document.getElementById('return-slider');
    
    const initialValue = document.getElementById('initial-value');
    const contributionValue = document.getElementById('contribution-value');
    const yearsValue = document.getElementById('years-value');
    const returnValue = document.getElementById('return-value');
    
    const resultValue = document.getElementById('result-value');
    const totalContributions = document.getElementById('total-contributions');
    const totalGrowth = document.getElementById('total-growth');
    
    function formatCurrency(value) {
        if (value >= 1000000) {
            return '$' + (value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1) + 'M';
        }
        return '$' + value.toLocaleString('en-US');
    }
    
    function formatCurrencyFull(value) {
        return '$' + Math.round(value).toLocaleString('en-US');
    }
    
    function calculateROI() {
        if (!initialSlider) return;
        
        const initial = parseFloat(initialSlider.value);
        const contribution = parseFloat(contributionSlider.value);
        const years = parseFloat(yearsSlider.value);
        const rate = parseFloat(returnSlider.value) / 100;
        
        // Update display values
        initialValue.textContent = formatCurrency(initial);
        contributionValue.textContent = formatCurrency(contribution);
        yearsValue.textContent = years + ' years';
        returnValue.textContent = returnSlider.value + '%';
        
        // Calculate future value with compound interest and regular contributions
        // FV = P(1+r)^n + PMT * (((1+r)^n - 1) / r)
        let futureValue = initial * Math.pow(1 + rate, years);
        
        if (rate > 0 && contribution > 0) {
            futureValue += contribution * ((Math.pow(1 + rate, years) - 1) / rate);
        } else if (contribution > 0) {
            futureValue += contribution * years;
        }
        
        const totalContrib = initial + (contribution * years);
        const growth = futureValue - totalContrib;
        
        // Update results
        resultValue.textContent = formatCurrencyFull(futureValue);
        totalContributions.textContent = formatCurrencyFull(totalContrib);
        totalGrowth.textContent = '+' + formatCurrencyFull(growth);
    }
    
    // Add event listeners to sliders
    if (initialSlider) {
        initialSlider.addEventListener('input', calculateROI);
        contributionSlider.addEventListener('input', calculateROI);
        yearsSlider.addEventListener('input', calculateROI);
        returnSlider.addEventListener('input', calculateROI);
        
        // Initial calculation
        calculateROI();
    }

    // ================================
    // Trust Bar Number Animation
    // ================================
    const trustNumbers = document.querySelectorAll('.trust-bar__number');
    let numbersAnimated = false;
    
    function animateNumbers() {
        if (numbersAnimated) return;
        
        trustNumbers.forEach(numEl => {
            const text = numEl.textContent;
            const match = text.match(/(\d+)/);
            if (!match) return;
            
            const target = parseInt(match[0]);
            const prefix = text.split(match[0])[0];
            const suffix = text.split(match[0])[1];
            
            let current = 0;
            const increment = target / 40;
            const duration = 1200;
            const stepTime = duration / 40;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }
                numEl.textContent = prefix + Math.floor(current) + suffix;
            }, stepTime);
        });
        
        numbersAnimated = true;
    }
    
    const trustBar = document.querySelector('.trust-bar');
    if (trustBar) {
        const trustObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    trustObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });
        
        trustObserver.observe(trustBar);
    }

    // ================================
    // Contact Form Handling
    // ================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            // Show loading state
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                btn.textContent = 'Consultation Requested ✓';
                btn.style.background = '#22c55e';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    this.reset();
                }, 3000);
            }, 1500);
        });
    }

    // ================================
    // Lazy Load Images
    // ================================
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.loading) {
            img.loading = 'lazy';
        }
    });

});
