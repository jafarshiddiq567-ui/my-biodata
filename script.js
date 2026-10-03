/* ─── JAVASCRIPT ── script.js ──────────────────
   Personal Biodata Website Interactions
───────────────────────────────────────────── */

'use strict';

// ── PAGE LOAD FADE-IN ────────────────────────
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.7s ease';
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ── CURSOR GLOW (smooth lerp) ─────────────────
(function() {
  const cursorGlow = document.getElementById('cursor-glow');
  if (!cursorGlow) return;
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;
  document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
  (function loop() {
    cx += (mx - cx) * 0.07;
    cy += (my - cy) * 0.07;
    cursorGlow.style.left = cx + 'px';
    cursorGlow.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();
})();

// ── NAVBAR SCROLL & PROGRESS BAR ─────────────
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scroll-progress-bar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  if (scrollProgress) {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = (window.scrollY / scrollTotal) * 100 + '%';
  }
  updateActiveNav();
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const link = document.querySelector(`#navbar a[href="#${section.id}"]`);
    if (!link) return;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

// ── THEME TOGGLE ─────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌙' : '☀️';
  });
}

// ── HAMBURGER MENU ───────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── TYPED TAGLINE ────────────────────────────
// Baca taglines dari config.js jika tersedia
const taglines = (typeof window._CONFIG_TAGLINES !== 'undefined' && window._CONFIG_TAGLINES.length)
  ? window._CONFIG_TAGLINES
  : [
      'Software Engineer \uD83D\uDCBB',
      'UI/UX Designer \uD83C\uDFA8',
      'Problem Solver \uD83E\uDDE0',
      'Content Creator \uD83D\uDCF8',
      'Lifelong Learner \uD83D\uDE80',
    ];

let tagIdx = 0, charIdx = 0, isDeleting = false;
const tagEl = document.getElementById('typed-tagline');

function typeWriter() {
  const current = taglines[tagIdx];
  if (isDeleting) {
    tagEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
  } else {
    tagEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
  }

  let speed = isDeleting ? 60 : 90;

  if (!isDeleting && charIdx === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    tagIdx = (tagIdx + 1) % taglines.length;
    speed = 400;
  }

  setTimeout(typeWriter, speed);
}

typeWriter();

// ── SCROLL REVEAL ────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── COUNTER ANIMATION ─────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const counterEls = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counterEls.forEach(el => counterObserver.observe(el));

// ── SKILL BAR ANIMATION ───────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.dataset.width;
      setTimeout(() => {
        entry.target.style.width = width + '%';
      }, 200);
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(el => skillObserver.observe(el));

// ── CONTACT FORM & COPY EMAIL ────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-submit');
  btn.textContent = '⏳ Sending...';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('contact-form').reset();
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    const successEl = document.getElementById('form-success');
    successEl.classList.remove('hidden');
    setTimeout(() => successEl.classList.add('hidden'), 4000);
  }, 1500);
}

function copyEmail() {
  navigator.clipboard.writeText('jafarshiddiq567@gmail.com').then(() => {
    const btn = document.getElementById('copy-email-btn');
    btn.textContent = '✅';
    setTimeout(() => btn.textContent = '📋', 2000);
  });
}

// ── SMOOTH ACTIVE SECTION ON LOAD ─────────────
window.addEventListener('load', updateActiveNav);

// ── PORTFOLIO CARD TILT EFFECT ────────────────
document.querySelectorAll('.portfolio-card').forEach(card => {
  card.style.transformStyle = 'preserve-3d';
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((y - midY) / midY) * -6;
    const rotateY = ((x - midX) / midX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── GALLERY ITEM Z-INDEX ON HOVER ────────────
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mouseenter', () => { item.style.zIndex = '10'; });
  item.addEventListener('mouseleave', () => { item.style.zIndex = ''; });
});

// ── RIPPLE EFFECT on SOCIAL CARDS ────────────
(function() {
  const style = document.createElement('style');
  style.textContent = '@keyframes ripple-anim { to { transform: scale(2.8); opacity: 0; } }';
  document.head.appendChild(style);

  document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const r = document.createElement('span');
      const rect = card.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      r.style.cssText = [
        'position:absolute', 'border-radius:50%',
        'width:' + size + 'px', 'height:' + size + 'px',
        'top:' + (e.clientY - rect.top - size / 2) + 'px',
        'left:' + (e.clientX - rect.left - size / 2) + 'px',
        'background:rgba(139,92,246,0.18)',
        'transform:scale(0)', 'pointer-events:none', 'z-index:0',
        'animation:ripple-anim 0.6s ease-out forwards'
      ].join(';');
      card.appendChild(r);
      setTimeout(() => r.remove(), 650);
    });
  });
})();

// ── BACK TO TOP VISIBILITY ─────────────────────
const backTop = document.getElementById('back-to-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.style.opacity = window.scrollY > 300 ? '1' : '0';
    backTop.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
  }, { passive: true });
  backTop.style.opacity = '0';
  backTop.style.transition = 'opacity 0.3s ease';
}
