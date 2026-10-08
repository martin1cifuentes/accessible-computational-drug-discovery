/* Progressive enhancement: all scientific copy, navigation and contact links
 * are available without JavaScript. Configuration only fills verified assets. */
for (const [key, project] of Object.entries(window.PROJECT_ASSETS || {})) {
  const placeholder = document.querySelector(`[data-project-link="${key}"]`);
  if (project.url && placeholder) {
    const url = new URL(project.url, location.href);
    if (url.protocol === 'https:') {
      const link = document.createElement('a');
      link.className = 'text-link';
      link.href = url.href;
      link.append('Explore the project on GitHub ');
      const arrow = document.createElement('span');
      arrow.textContent = '↗';
      arrow.setAttribute('aria-hidden', 'true');
      link.append(arrow);
      link.setAttribute('aria-label', `Explore ${key === 'protein' ? 'Protein–Membrane Workspace' : 'Particle Simulator'} on GitHub`);
      placeholder.replaceWith(link);
    }
  }
  const visual = document.querySelector(`[data-project-image="${key}"]`);
  if (project.image && visual && visual.querySelector('img')?.getAttribute('src') !== project.image) {
    const img = new Image();
    img.alt = project.alt;
    img.decoding = 'async';
    if (project.width && project.height) { img.width = project.width; img.height = project.height; }
    img.addEventListener('load', () => {
      const link = document.createElement('a');
      link.className = 'screenshot-link';
      link.href = project.image;
      link.target = '_blank';
      link.rel = 'noopener';
      link.setAttribute('aria-label', `View ${key === 'protein' ? 'Protein–Membrane Workspace' : 'Particle Simulator'} screenshot at full size (opens in a new tab)`);
      link.append(img);
      visual.replaceChildren(link);
    }, {once:true});
    // Keep the honest placeholder in place if an asset cannot be loaded.
    img.src = project.image;
  }
}

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
