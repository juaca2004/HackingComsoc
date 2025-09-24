// easter-eggs.js
function revealLinks() {
  const links = document.querySelectorAll('.secret-link');
  links.forEach(l => {
    l.style.display = 'block';
  });
  const nav = document.querySelector('.hidden-links');
  nav.setAttribute('aria-hidden', 'false');
  // small visual flash
  nav.style.transition = 'box-shadow 240ms ease';
  nav.style.boxShadow = '0 0 18px rgba(0,255,102,0.08)';
}

// Reveal via button for testing (non-destructive)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('revealBtn');
  if (btn) btn.addEventListener('click', () => {
    revealLinks();
  });
});
