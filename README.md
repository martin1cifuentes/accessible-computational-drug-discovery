# Autonomous Computational Aided Drug Discovery

A static research project website by Martin Cifuentes. No installation or build step is needed.

Expected website address: https://martin1cifuentes.github.io/accessible-computational-drug-discovery/

## GitHub Pages

In the repository's **Settings → Pages**, select **Deploy from a branch**, then **main** and **/(root)**. Save the configuration. The included `.nojekyll` file publishes the static files directly.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 4173` from this folder and visit http://localhost:4173/.

## Maintain the page

- `index.html`: English homepage and sharing metadata. English is the default.
- `es/index.html`: complete Spanish translation.
- `pt-br/index.html`: complete Brazilian Portuguese translation.
- `engineering/`: engineering methodology in English, Spanish and Brazilian Portuguese.
- `styles.css`, `acadd-page.css` and `acadd-diagrams.css`: shared typography, layout and scientific diagrams.
- `acadd-diagrams.js`: adds the outcome selector to the resource allocation example. All outcomes remain available without JavaScript.
- `site.js`: optional active navigation and section-preserving language links.
- `site-config.js`: verified project destinations (translated link labels stay in HTML).
- `assets/`: illustrations, project screenshots, portrait and social preview.

Each language is a static page with its own URL, language attribute, canonical URL, sharing metadata and reciprocal language alternatives. All text, diagrams, images and language links work without JavaScript. Language selection does not redirect visitors based on browser settings or a saved preference: the main address always opens in English. With JavaScript enabled, switching languages preserves the current section.

Keep scientific content synchronized across all three HTML files when editing. Translate visible text, captions, image alternatives, accessibility labels and sharing descriptions. Preserve scientific qualifications, method names, contact destinations and section IDs. The project screenshots are shared. Each language has its own social preview in `assets/autonomous-discovery-{en,es,pt-br}.jpg`, with an editable SVG alongside it.

If the website address changes, run `node scripts/set-site-url.mjs https://your-host/your-project/` with Node.js 18 or newer. This updates canonical, language-alternative and Open Graph/Twitter URLs on the homepages and engineering pages while preserving a repository subpath and each language’s preview image.

The UK, Spanish and Brazilian SVG flags in `assets/flags/` are from [flag-icons](https://github.com/lipis/flag-icons). Their MIT license is included in `assets/flags/LICENSE`.
