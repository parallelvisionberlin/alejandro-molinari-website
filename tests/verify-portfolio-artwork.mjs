import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const css = readFileSync(join(root, 'styles.css'), 'utf8');
const count = [...html.matchAll(/<article class="project" data-category=/g)].length;
assert.equal(count, 9, 'Current approved homepage contains nine selected projects.');
assert.match(html, /id="project-count">\(09\)/);
const files = [
  ['radiooooo-portrait.webp', 'artwork-radiooooo'],
  ['purple-diary-logo.png', 'culto-feature-logo'],
  ['selected-recordings-red.webp', 'artwork-recordings'],
  ['tanzen-film-still.webp', 'artwork-tanzen'],
];
for (const [name, className] of files) {
  const file = join(root, 'assets', name);
  assert.ok(existsSync(file), `Missing approved source artwork: ${name}`);
  assert.ok(statSync(file).size > 2000, `Unexpectedly empty artwork: ${name}`);
  const bytes = readFileSync(file);
  if (name.endsWith('.webp')) {
    assert.equal(bytes.subarray(0,4).toString('ascii'), 'RIFF', `${name} not WebP`);
    assert.equal(bytes.subarray(8,12).toString('ascii'), 'WEBP', `${name} not WebP`);
  } else {
    assert.equal(bytes.subarray(1,4).toString('ascii'), 'PNG', `${name} not PNG`);
  }
  assert.ok(html.includes(`src="assets/${name}"`), `Missing image HTML reference: ${name}`);
  assert.ok(html.includes(className), `Missing styled approved card: ${className}`);
}
assert.match(html,/https:\/\/parallelvisionlabel\.com\/tanzen-im-kreis\.html/, 'Tanzen card must link to full release experience');
assert.match(html,/https:\/\/purple\.fr\/diary\/alejandro-molinari-for-purple-future-radiooooo\//);
assert.match(html,/https:\/\/purple\.fr\/diary\/culto-a-la-vida-alejandro-molinari\//);
assert.ok(!html.includes('<strong>PURPLE</strong>'), 'Use actual Purple logo, not recreated typography.');
assert.ok(!html.includes('artwork-stay-fallback'), 'No duplicated Stay Low lettering.');
assert.ok(html.includes('artwork-stay-clean'), 'Keep the original album cover unobstructed.');
assert.ok(!html.includes('href="https://parallelvisionlabel.com/photography/"'), 'Photography stays unpublished.');
assert.ok(css.includes('.ui-external-icon,.media-arrow{display:none!important;}'), 'No arrows on mobile.');
assert.ok(css.includes('.artwork-culto .culto-feature-logo'), 'Purple logo CSS is missing.');
console.log(`Verified ${count} projects, 4 local artwork assets, all links, logo and mobile rules.`);
