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

// Typewriter Animation for SUNIRU LANKA Wordmark
function initWordmarkTypewriter() {
  const footerWordmark = document.querySelector('.footer-wordmark');
  if (!footerWordmark) return;

  const suniruEl = footerWordmark.querySelector('span');
  const lankaEl = footerWordmark.querySelector('em');
  if (!suniruEl || !lankaEl) return;

  const suniruText = 'SUNIRU';
  const lankaText = 'LANKA';

  // Create typing cursor element
  const cursor = document.createElement('span');
  cursor.className = 'type-cursor';
  cursor.setAttribute('aria-hidden', 'true');

  let isTyping = false;
  let hasTyped = false;

  function typeText() {
    if (isTyping) return;
    isTyping = true;

    // Clear content and append cursor to span
    suniruEl.textContent = '';
    lankaEl.textContent = '';
    suniruEl.appendChild(cursor);

    let suniruIndex = 0;
    let lankaIndex = 0;

    function typeSuniru() {
      if (suniruIndex < suniruText.length) {
        suniruEl.textContent = suniruText.slice(0, suniruIndex + 1);
        suniruEl.appendChild(cursor);
        suniruIndex++;
        setTimeout(typeSuniru, 120 + Math.random() * 40);
      } else {
        setTimeout(() => {
          lankaEl.appendChild(cursor);
          setTimeout(typeLanka, 180);
        }, 150);
      }
    }

    function typeLanka() {
      if (lankaIndex < lankaText.length) {
        lankaEl.textContent = lankaText.slice(0, lankaIndex + 1);
        lankaEl.appendChild(cursor);
        lankaIndex++;
        setTimeout(typeLanka, 130 + Math.random() * 40);
      } else {
        isTyping = false;
        hasTyped = true;
      }
    }

    typeSuniru();
  }

  // Trigger when footer wordmark is in view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasTyped) {
          typeText();
        }
      });
    }, { threshold: 0.15 });
    observer.observe(footerWordmark);
  } else {
    typeText();
  }

  // Replay typing animation on click
  footerWordmark.addEventListener('click', () => {
    if (!isTyping) {
      typeText();
    }
  });
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  initWordmarkTypewriter();
}

