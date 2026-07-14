const header = document.querySelector('.site-header');
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

function updateHeader() {
  header?.classList.toggle('scrolled', window.scrollY > 18);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

toggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Mark active case-study section in the project-page side navigation.
const sections = [...document.querySelectorAll('.case-section[id]')];
const asideLinks = [...document.querySelectorAll('.case-aside a')];
if (sections.length && asideLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        asideLinks.forEach(a => a.style.color = '');
        const active = asideLinks.find(a => a.getAttribute('href') === `#${entry.target.id}`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  }, { rootMargin: '-30% 0px -58% 0px' });
  sections.forEach(s => sectionObserver.observe(s));
}
