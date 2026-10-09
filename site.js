/* All content, images and language choices are static and work without JavaScript.
 * Keep each page's translated link text and image descriptions intact. */
for (const [key, project] of Object.entries(window.PROJECT_ASSETS || {})) {
  const link = document.querySelector(`a[data-project-link="${key}"]`);
  if (project.url && link) {
    const url = new URL(project.url, location.href);
    if (url.protocol === 'https:') link.href = url.href;
  }
}

// Keep the section being read when changing language. The root stays English.
const languageLinks = [...document.querySelectorAll('.language-switcher a')];
function retainSection() {
  for (const link of languageLinks) {
    const url = new URL(link.href);
    url.hash = location.hash;
    link.href = url.href;
  }
}
retainSection();
window.addEventListener('hashchange', retainSection);

// Direct links to technical details expose the requested content immediately.
function revealLinkedDetails() {
  const target = document.getElementById(location.hash.slice(1));
  const details = target?.closest('details');
  if (details) details.open = true;
}
revealLinkedDetails();
window.addEventListener('hashchange', revealLinkedDetails);

const navLinks = [...document.querySelectorAll('.main-nav a')];
const observedSections = [document.querySelector('#top'), ...navLinks.map(link => document.querySelector(link.getAttribute('href')))].filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        for (const link of navLinks) {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    }
  }, {rootMargin:'-15% 0px -65% 0px'});
  observedSections.forEach(section => observer.observe(section));
}
