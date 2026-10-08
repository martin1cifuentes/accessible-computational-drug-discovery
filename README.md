# Accessible Computational Drug Discovery

A static research project website by Martin Cifuentes. No installation or build step is needed.

Expected website address: https://martin1cifuentes.github.io/accessible-computational-drug-discovery/

## GitHub Pages

In the repository's **Settings → Pages**, select **Deploy from a branch**, then **main** and **/(root)**. Save the configuration. The included `.nojekyll` file publishes the static files directly.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 4173` from this folder and visit http://localhost:4173/.

## Maintain the page

- `index.html`: page content and sharing metadata.
- `styles.css`: typography and responsive layout.
- `site.js` and `site-config.js`: optional navigation and project-asset enhancements.
- `assets/`: illustrations, project screenshots, portrait and social preview.

If the website address changes, run `node scripts/set-site-url.mjs https://your-host/your-project/` with Node.js 18 or newer. This updates the canonical URL and the Open Graph/Twitter image URLs while preserving a repository subpath. The current social preview is `assets/social-preview-v2.jpg`.
