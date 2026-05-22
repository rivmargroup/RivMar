// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Global nav scrolled state
const globalNav = document.getElementById('globalNav');
window.addEventListener('scroll', () => {
    globalNav.classList.toggle('scrolled', window.scrollY > 20);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
        document.querySelectorAll('.faq-question').forEach(el => el.setAttribute('aria-expanded', 'false'));
        if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.dataset.full || img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// Mobile CTA bar — hide when contact/footer visible
const mobileCtaBar = document.getElementById('mobileCtaBar');
const contactSection = document.getElementById('contact');
const footer = document.querySelector('.footer');

if (mobileCtaBar) {
    const hideCTA = (entries) => {
        entries.forEach(entry => {
            const hidden = entry.isIntersecting;
            mobileCtaBar.style.transform = hidden ? 'translateY(100%)' : 'translateY(0)';
            mobileCtaBar.style.opacity = hidden ? '0' : '1';
        });
    };
    if (contactSection) new IntersectionObserver(hideCTA, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }).observe(contactSection);
    if (footer) new IntersectionObserver(hideCTA, { threshold: 0 }).observe(footer);
}
