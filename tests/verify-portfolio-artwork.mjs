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

const symmetryPoster = join(root,'assets','symmetry-idib-official-video.webp');
assert.ok(existsSync(symmetryPoster), 'The official Symmetry poster must be self-hosted.');
assert.ok(statSync(symmetryPoster).size > 20000, 'The Symmetry video poster is too small.');
const posterBytes = readFileSync(symmetryPoster);
assert.equal(posterBytes.subarray(0,4).toString('ascii'), 'RIFF');
assert.equal(posterBytes.subarray(8,12).toString('ascii'), 'WEBP');
assert.match(html, /href="work\/symmetry\/"/, 'The new card must open the Symmetry detail page.');
assert.match(html, /src="assets\/symmetry-kaltblut-editorial\.webp"/);
assert.ok(html.includes('<h2>Symmetry</h2>'), 'Symmetry must replace the Sunday Morning project card.');
assert.ok(!html.includes('<h2>Sunday Morning</h2>'), 'Do not keep the replaced Sunday Morning project card.');
assert.match(html, /href="https:\/\/idib\.ffm\.to\/symmetry"/, 'The recording must link to the Italians Do It Better release.');
assert.match(html, /KALTBLUT video premiere/, 'The magazine premiere must be described accurately.');
const symmetryDetail = readFileSync(join(root,'work/symmetry/index.html'),'utf8');
assert.match(symmetryDetail, /youtube-nocookie\.com\/embed\/wmRRiQqba30/, 'Symmetry detail page must embed the official video.');
assert.match(symmetryDetail, /www\.kaltblut-magazine\.com\/video-premiere-juno-francis-alejandro-molinari-symmetry/);
assert.match(symmetryDetail, /idib\.ffm\.to\/symmetry/);
assert.match(symmetryDetail, /Marcus Spitta/);
assert.doesNotMatch(symmetryDetail, /[\u2190-\u21FF\u2794-\u27BF]/u, 'No emoji arrows in Symmetry details.');
assert.ok(css.includes('.artwork-symmetry img'), 'Official poster must have a full-frame, uncropped style.');


const pressArtwork = join(root,'assets','symmetry-kaltblut-editorial.webp');
assert.ok(existsSync(pressArtwork), 'KALTBLUT editorial artwork must be stored locally.');
assert.ok(statSync(pressArtwork).size > 10000, 'The editorial artwork file is unexpectedly small.');
const pressBytes = readFileSync(pressArtwork);
assert.equal(pressBytes.subarray(0,4).toString('ascii'),'RIFF');
assert.equal(pressBytes.subarray(8,12).toString('ascii'),'WEBP');
assert.match(html, /Symmetry editorial portrait photographed by Amaan Hassen/);
assert.match(html, /class="project-media image-media artwork-recordings" href="https:\/\/parallelvisionlabel\.com\/#releases"/, 'Selected Recordings must open Parallel Vision releases directly.');
assert.doesNotMatch(html, /class="project-media image-media artwork-recordings" href="https:\/\/alejandromolinari\.bandcamp\.com\//, 'Selected Recordings must not link to Bandcamp.');
assert.match(css, /\.artwork-symmetry img\{[\s\S]*?object-fit:cover;/, 'Symmetry editoral thumbnail must fit the project card without letterboxing.');

console.log(`Verified ${count} projects, 5 local artwork assets, all links, logo and mobile rules.`);
