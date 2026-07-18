// =============================================
// JESSICA SEIXAS — PORTFÓLIO
// =============================================

// Scroll ativo nos links da navbar
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Animação de entrada ao rolar
const animItems = document.querySelectorAll('.proj-card, .stat-card, .skill-item, .contact-row');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 60);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animItems.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  fadeObserver.observe(el);
});

// ---- Case study modal ----
function openCase(id) {
  const overlay = document.getElementById('case-overlay');
  document.querySelectorAll('.case-modal').forEach(m => m.style.display = 'none');
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'block';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCase(e) {
  if (e && e.target !== e.currentTarget) return;
  const overlay = document.getElementById('case-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
