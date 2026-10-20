// Hotel Suniru Lanka - Interactive Scripts
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

// Header scroll state with backdrop blur
window.addEventListener('scroll', () => {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
}, { passive: true });

// Mobile menu toggle
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Dynamic copyright year in footer
const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Reveal logic with immediate viewport check & reliable fallbacks
const revealElements = document.querySelectorAll('.reveal, .reveal-image, .type-reveal');

function checkAndReveal() {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    // Reveal elements already in view or slightly below the viewport (within 180px)
    if (rect.top <= windowHeight + 180) {
      el.classList.add('visible');
    }
  });
}

// Intersection Observer for progressive scroll reveals
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '120px 0px 80px 0px',
    threshold: 0.01
  });

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 120) {
      element.classList.add('visible');
    } else {
      observer.observe(element);
    }
  });
} else {
  // If IntersectionObserver is unavailable, make everything visible immediately
  revealElements.forEach((el) => el.classList.add('visible'));
}

// Fallback: Reveal all elements after page load to guarantee images/text never stay hidden
function revealAll() {
  revealElements.forEach((el) => el.classList.add('visible'));
}

if (document.readyState === 'complete') {
  checkAndReveal();
} else {
  window.addEventListener('DOMContentLoaded', checkAndReveal);
  window.addEventListener('load', () => {
    checkAndReveal();
    setTimeout(revealAll, 400);
  });
}

// Safety timeout: all reveals visible within 1.2s regardless of scroll or network condition
setTimeout(revealAll, 1200);

// Smooth Parallax for Hero
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const heroMedia = document.querySelector('.hero-media');
  if (heroMedia) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < 1200) {
        heroMedia.style.transform = `scale(1.05) translateY(${y * 0.08}px)`;
      }
    }, { passive: true });
  }
}

// Interactive Golden Kinetic Cursor Parallax for SUNIRU LANKA Wordmark
const footerWordmark = document.querySelector('.footer-wordmark');
if (footerWordmark && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const span = footerWordmark.querySelector('span');
  const em = footerWordmark.querySelector('em');

  footerWordmark.addEventListener('mousemove', (e) => {
    const rect = footerWordmark.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    if (span) {
      span.style.transform = `translate(${x * 20}px, ${y * 14 - 6}px) scale(1.02)`;
      span.style.filter = `drop-shadow(${x * -10}px 8px 30px rgba(244, 208, 132, 0.8))`;
    }
    if (em) {
      em.style.transform = `translate(${x * -20}px, ${y * -14 - 6}px) scale(1.02)`;
      em.style.filter = `drop-shadow(${x * 10}px 8px 30px rgba(244, 208, 132, 0.8))`;
    }
  });

  footerWordmark.addEventListener('mouseleave', () => {
    if (span) {
      span.style.transform = '';
      span.style.filter = '';
    }
    if (em) {
      em.style.transform = '';
      em.style.filter = '';
    }
  });
}

