# Accessible Computational Drug Discovery

A static research project website by Martin Cifuentes. No installation or build step is needed.

Expected website address: https://martin1cifuentes.github.io/accessible-computational-drug-discovery/

## GitHub Pages

In the repository's **Settings → Pages**, select **Deploy from a branch**, then **main** and **/(root)**. Save the configuration. The included `.nojekyll` file publishes the static files directly.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 4173` from this folder and visit http://localhost:4173/.

## Maintain the page

- `index.html`: approved English page and sharing metadata; English is the default.
- `es/index.html`: complete Spanish translation.
- `pt-br/index.html`: complete Brazilian Portuguese translation.
- `styles.css`: typography and responsive layout.
- `site.js`: optional active navigation and section-preserving language links.
- `site-config.js`: verified project destinations (translated link labels stay in HTML).
- `assets/`: illustrations, project screenshots, portrait and social preview.

Each language is a static page with its own URL, language attribute, canonical URL, sharing metadata and reciprocal language alternatives. All text, diagrams, images and language links work without JavaScript. Language selection does not redirect visitors based on browser settings or a saved preference: the main address always opens in English. With JavaScript enabled, switching languages preserves the current section.

Keep scientific content synchronized across all three HTML files when editing. Translate visible text, captions, image alternatives, accessibility labels and sharing descriptions; preserve scientific qualifications, method names, contact destinations and section IDs. Shared CSS, scripts and images live at the repository root; translated pages use relative `../` asset paths. The project screenshots and current social-preview artwork are shared, with translated descriptions.

If the website address changes, run `node scripts/set-site-url.mjs https://your-host/your-project/` with Node.js 18 or newer. This updates canonical, language-alternative and Open Graph/Twitter URLs in all three pages while preserving a repository subpath. The current social preview is `assets/social-preview-v2.jpg`.

The UK, Spanish and Brazilian SVG flags in `assets/flags/` are from [flag-icons](https://github.com/lipis/flag-icons). Their MIT license is included in `assets/flags/LICENSE`.
