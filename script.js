/* ============================================
   Gaetano Reale GmbH — Scripts
   ============================================ */

/* ============ LOADER ============ */
window.addEventListener('load', () => {
    const bar = document.getElementById('loaderBar');
    bar.style.width = '100%';
    setTimeout(() => {
        const loader = document.getElementById('loader');
        gsap.to(loader, {
            yPercent: -100,
            duration: 1,
            ease: 'expo.inOut',
            onComplete: () => loader.style.display = 'none'
        });
        initAnimations();
    }, 1100);
});

/* ============ LENIS SMOOTH SCROLL ============ */
const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* ============ NAVBAR SCROLL ============ */
const navbar = document.getElementById('navbar');

lenis.on('scroll', ({ scroll }) => {
    if (scroll > 100) {
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('shadow-sm');
    }

    // Dark mode für Nav über dunklen Sections
    const darkSections = document.querySelectorAll('#vertrauen, #kontakt');
    let onDark = false;
    darkSections.forEach(s => {
        const r = s.getBoundingClientRect();
        if (r.top <= 80 && r.bottom >= 80) onDark = true;
    });
    if (onDark) {
        navbar.classList.add('dark-mode');
        navbar.style.color = '#EDE4D5';
    } else {
        navbar.classList.remove('dark-mode');
        navbar.style.color = '';
    }
});

/* ============ MOBILE MENU ============ */
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ============ CURSOR GLOW ============ */
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursorGlow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power2.out'
    });
});

/* ============ SMOOTH ANCHOR LINKS ============ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -20, duration: 1.5 });
        }
    });
});

/* ============ ANIMATIONS ============ */
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero headline reveal
    gsap.to('.reveal-line span', {
        y: 0,
        duration: 1.4,
        ease: 'expo.out',
        stagger: 0.12,
        delay: 0.2
    });

    gsap.from('.reveal-fade', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.15,
        delay: 0.9
    });

    // Hero parallax
    gsap.to('.hero-bg', {
        backgroundPosition: '50% 80%',
        ease: 'none',
        scrollTrigger: {
            trigger: '#home',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Fade in elements
    gsap.utils.toArray('.fade-in').forEach(el => {
        gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Image reveal mask
    gsap.utils.toArray('.reveal-mask').forEach(el => {
        gsap.fromTo(el,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.6,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%'
                }
            }
        );
    });

    // Stat counter
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        const target = parseFloat(el.dataset.target);
        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            onEnter: () => {
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: () => {
                        el.textContent = Math.floor(obj.val);
                    }
                });
            }
        });
    });

    // Subtle parallax on project images
    gsap.utils.toArray('.project-image').forEach(img => {
        gsap.to(img, {
            yPercent: -8,
            ease: 'none',
            scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Marquee speed reactive to scroll
    const marquee = document.querySelector('.marquee-track');
    if (marquee) {
        ScrollTrigger.create({
            trigger: marquee,
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => {
                const speed = 1 + Math.abs(self.getVelocity() / 4000);
                marquee.style.animationDuration = (40 / Math.min(speed, 4)) + 's';
            }
        });
    }
}

/* ============ LIGHTBOX ============ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.project-card[data-img]').forEach(card => {
    card.addEventListener('click', (e) => {
        lightboxImg.src = card.dataset.img;
        lightbox.classList.add('active');
    });
});

lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
});

/* ============ FORM ============ */
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.querySelector('span').textContent = 'Nachricht gesendet ✓';
    setTimeout(() => {
        btn.querySelector('span').textContent = 'Nachricht senden';
        e.target.reset();
    }, 2400);
});
