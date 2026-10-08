import {readFile, writeFile} from 'node:fs/promises';

// Change only the host-dependent sharing URLs. The published page stays static.
const input = process.argv[2];
if (!input || process.argv.length !== 3) {
  console.error('Usage: node scripts/set-site-url.mjs https://your-host/your-project/');
  process.exit(1);
}
let base;
try { base = new URL(input); } catch { console.error('Provide a complete HTTPS website URL.'); process.exit(1); }
if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash) {
  console.error('Use an HTTPS URL without credentials, query parameters or a fragment.');
  process.exit(1);
}
base.pathname = base.pathname.replace(/\/?$/, '/');
const page = new URL('../index.html', import.meta.url);
let html = await readFile(page, 'utf8');
const imageMatch = html.match(/<meta property="og:image" content="([^"]+)">/);
if (!imageMatch) throw new Error('The page must contain an Open Graph image.');
const filename = new URL(imageMatch[1]).pathname.split('/').pop();
const imageUrl = new URL(`assets/${filename}`, base).href;
const replacements = [
  [/<link rel="canonical" href="[^"]+">/g, `<link rel="canonical" href="${base.href}">`],
  [/<meta property="og:url" content="[^"]+">/g, `<meta property="og:url" content="${base.href}">`],
  [/<meta property="og:image" content="[^"]+">/g, `<meta property="og:image" content="${imageUrl}">`],
  [/<meta name="twitter:image" content="[^"]+">/g, `<meta name="twitter:image" content="${imageUrl}">`]
];
for (const [pattern, replacement] of replacements) {
  if ([...html.matchAll(pattern)].length !== 1) throw new Error('Sharing metadata must contain exactly one of each URL tag.');
  html = html.replace(pattern, () => replacement);
}
await writeFile(page, html, 'utf8');
console.log(`Sharing URLs updated for ${base.href}`);

