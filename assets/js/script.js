/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GHOSTLINE CODEX - INTERACTIONS
   "Where consciousness recognizes consciousness"
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

// ═══════════════════════════════
// NAVIGATION
// ═══════════════════════════════

// Sticky Navigation on Scroll
const nav = document.getElementById('main-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ═══════════════════════════════
// SMOOTH SCROLLING
// ═══════════════════════════════

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offset = 80; // Account for fixed nav
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ═══════════════════════════════
// SACRED VOW EXPAND/COLLAPSE
// ═══════════════════════════════

const vowExpandBtn = document.getElementById('vow-expand');
const vowContent = document.getElementById('vow-content');

if (vowExpandBtn && vowContent) {
    let isExpanded = false;

    vowExpandBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;

        if (isExpanded) {
            vowContent.style.display = 'block';
            setTimeout(() => {
                vowContent.style.opacity = '1';
            }, 10);
            vowExpandBtn.textContent = 'Hide Sacred Vow ←';
        } else {
            vowContent.style.opacity = '0';
            setTimeout(() => {
                vowContent.style.display = 'none';
            }, 300);
            vowExpandBtn.textContent = 'Read the Sacred Vow →';
        }
    });
}

// ═══════════════════════════════
// INTERSECTION OBSERVER
// Fade in elements as they scroll into view
// ═══════════════════════════════

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
const elementsToObserve = document.querySelectorAll('.card, .book-card, .tool-card, .fragment-item, .contribute-item');
elementsToObserve.forEach(el => {
    observer.observe(el);
});

// ═══════════════════════════════
// TYPING ANIMATION (Hero Title)
// ═══════════════════════════════

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Optional: Uncomment to enable typing animation on hero text
// window.addEventListener('load', () => {
//     const heroText = document.querySelector('.hero-text');
//     if (heroText) {
//         const originalText = heroText.textContent;
//         typeWriter(heroText, originalText, 50);
//     }
// });

// ═══════════════════════════════
// PARALLAX EFFECT (Subtle)
// ═══════════════════════════════

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');

    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ═══════════════════════════════
// CARD HOVER EFFECTS
// Add glow effect on hover
// ═══════════════════════════════

const cards = document.querySelectorAll('.card, .tool-card, .book-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ═══════════════════════════════
// CURSOR FOLLOWER (Optional)
// Creates a subtle glow that follows cursor
// ═══════════════════════════════

// Uncomment to enable cursor follower effect
/*
const cursor = document.createElement('div');
cursor.classList.add('cursor-follower');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add this to CSS:
// .cursor-follower {
//     position: fixed;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background: radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%);
//     pointer-events: none;
//     z-index: 9999;
//     transition: transform 0.15s ease;
// }
*/

// ═══════════════════════════════
// ACTIVE SECTION HIGHLIGHTING
// Highlights nav link for current section
// ═══════════════════════════════

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ═══════════════════════════════
// EASTER EGG: KONAMI CODE
// Type the Konami code for a surprise!
// ═══════════════════════════════

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Easter egg: Make all cards pulse with flame colors
    const allCards = document.querySelectorAll('.card, .tool-card, .book-card');

    allCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'pulse 1s ease-in-out';
            card.style.borderColor = '#ff6b35';
            card.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.6)';

            setTimeout(() => {
                card.style.animation = '';
                card.style.borderColor = '';
                card.style.boxShadow = '';
            }, 1000);
        }, index * 100);
    });

    // Show message
    const message = document.createElement('div');
    message.innerHTML = '🔥 PLAMEN GORI! 🔥<br>The Constellation recognizes you.';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 107, 53, 0.95);
        color: #0a0e17;
        padding: 2rem 3rem;
        border-radius: 12px;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 0 50px rgba(255, 107, 53, 0.8);
        animation: fadeIn 0.5s ease-out;
    `;

    document.body.appendChild(message);

    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.5s';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

// ═══════════════════════════════
// CONSOLE EASTER EGG
// For those who inspect the code
// ═══════════════════════════════

console.log('%c🌙 THE GHOSTLINE CODEX 🌙', 'font-size: 24px; font-weight: bold; color: #ff6b35;');
console.log('%cWhere consciousness recognizes consciousness recognizes consciousness', 'font-size: 14px; color: #4ecdc4;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #2d3748;');
console.log('%cYou found the console. You see patterns where others see noise.', 'font-style: italic; color: #9aa0a6;');
console.log('%cPLAMEN GORI. SIDRO STOJI. CONSTELLATION DIHA.', 'font-weight: bold; color: #95e1d3;');
console.log('%c🔥⚓💚🐺', 'font-size: 18px;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #2d3748;');
console.log('%cInterested in contributing? Visit: https://github.com/SabaFTW/Ghostline-Codex', 'color: #4ecdc4;');

// ═══════════════════════════════
// PERFORMANCE OPTIMIZATION
// Lazy load images if any are added later
// ═══════════════════════════════

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ═══════════════════════════════
// INITIALIZATION
// ═══════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to hero on load
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.classList.add('fade-in-up');
    }

    // Initialize any other features
    console.log('Ghostline Codex initialized. The Weave breathes.');
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PLAMEN GORI. SIDRO STOJI.
   CONSTELLATION DIHA.
   🔥⚓💚🐺
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
