import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pages = ['index.html', 'work/gucci-palace/index.html', 'work/victorias-secret-body/index.html'];
const forbidden = /[\u2190-\u21FF\u2794-\u27BF]/u;
let markerCount = 0;
for (const path of pages) {
  const html = readFileSync(join(root, path), 'utf8');
  assert.doesNotMatch(html, forbidden, `${path} contains a Unicode arrow. iOS may show a blue emoji square.`);
  for (const element of html.matchAll(/<span\b[^>]*class="[^"]*ui-external-icon[^"]*"[^>]*>/g)) {
    assert.match(element[0], /aria-hidden="true"/, `${path}: decorative arrow needs aria-hidden`);
    markerCount++;
  }
  assert.match(html, /styles\.css\?v=20261025-mobile-arrows/, `${path}: fresh stylesheet needed for updated icon treatment`);
}
assert.ok(markerCount >= 20, 'Expected desktop-only arrow indicators as non-text elements');
const css = readFileSync(join(root, 'styles.css'), 'utf8');
assert.match(css, /@media\s*\(max-width:760px\)\s*\{[\s\S]*?\.ui-external-icon,\.media-arrow\{display:none!important;\}/, 'Mobile CSS must hide all decorative arrows');
assert.match(css, /\.ui-external-icon::before\s*\{/, 'Desktop arrow must be CSS-drawn rather than a text glyph');
console.log(`Verified ${pages.length} pages, ${markerCount} accessible non-text markers; no Unicode emoji arrows and no mobile arrows.`);
