# Alejandro Molinari website

## Current task

- Updated: 2026-10-21.
- Request: use the approved AM monogram as the favicon on the apex and www domains.
- Repository: `parallelvisionberlin/alejandro-molinari-website`.
- Production branch: `main`.
- Inspected base commit: `1988e12aef2e3a4386c9d6e0f11c7300daa70b46`.
- Last verified runtime commit: `741e8c9798518030a7a9e99c236b8a5a6a4e680b`.
- Hosting: Cloudflare Pages, automatic deployments from `main` per project history.
- Domains: `https://alejandromolinari.com/` and `https://www.alejandromolinari.com/`.
- Existing website content was observed live in the browser on the apex domain.
- The older migration checklist in README.md predates that observation.

## Approved artwork

- Selected concept: original AM version 07, the serif ligature with the curved central separation.
- Exact user-supplied source: `ea7cf051-f092-41a8-bc0b-cc3775eecfa3.png`.
- Source Library ID: `libfile_cf944ea3577881918255caf1f98921ad`.
- Keep the white monogram on black. Do not substitute a typed AM or regenerate the design.
- Excess outer black margin is removed before fitting the mark into a square favicon.

## Implementation

- `favicon.svg`: self-contained supplied artwork with no external image dependency.
- `favicon.ico`: 16, 32, 48, 64, 128 and 256 pixel frames.
- `favicon-32x32.png`: raster browser fallback.
- `apple-touch-icon.png`: 180 pixel Apple home screen icon.
- All three HTML pages reference the same icons with `v=am-20261021` cache version.
- Updated pages: `/`, `/work/gucci-palace/`, `/work/victorias-secret-body/`.

## Verification and publication

- Local validation passed: PNG dimensions, six ICO frames, embedded SVG image and icon references on every HTML page.
- Exact comparison against the base confirms that only favicon markup changed in the three pages.
- Publication: favicon implementation committed to `main`; Cloudflare automatically published it.
- Browser verified new versioned favicon links on both apex and www homepages.
- Browser opened the production SVG on each domain and confirmed identical embedded artwork.
- The rendered production SVG visibly matches the approved AM monogram.
- Direct shell HTTP access returns 403 in this environment; browser production checks succeeded.
- No outstanding work for this favicon request. Future edits should start from the latest main branch.

## 2026-10-24 / Photography navigation and Victoria's Secret card

- Source task: link the personal artist archive to the existing Parallel Vision photographic archive, and use the user-selected Victoria's Secret card artwork.
- Verified photography destination: `https://parallelvisionlabel.com/photography/`, whose own header/footer already link back to `alejandromolinari.com`.
- Homepage and two existing detail-page navigations include a Photography link opening the archive in a new tab. The final former Artist archive card is titled Photography, keeps its existing amber portrait preview, and links to the same verified destination. It remains accessible in both Editorial and Archive project filters.
- Home Victoria's Secret tile uses `assets/victoria-secret-portfolio-2026.avif`, a 900 x 750 optimized version of the artwork approved in chat. Its composited labels are already part of the image; the existing DOM labels stay in the markup for accessibility but are visually transparent so they cannot duplicate. The underlying detail page and music credits are unchanged.
- No site design, spacing, filters, other projects or hosting configuration altered.

## 2026-10-25 / Symmetry / KALTBLUT video premiere

- User requested replacement of the standalone Sunday Morning card in Selected Work with **Symmetry** by Juno Francis and Alejandro Molinari, together with the official Italians Do It Better video and KALTBLUT magazine premiere.
- Verified at KALTBLUT: magazine published the video premiere on 2021-05-21; the official film was directed by Marcus Spitta and filmed at Berlin's KitKatClub.
- Verified official video posted by Italians Do It Better Music on 2021-05-21: YouTube ID `wmRRiQqba30`. The supplied credits identify Alejandro Molinari as music writer, producer and mixing engineer; Jacob Fagerstål for lyrics and melody; Jonas Kolahdoozan for camera.
- Personal Selected Work homepage (`index.html`): replaced the standalone Sunday Morning project tile with a **Symmetry** film project linking to `work/symmetry/`; 9 cards remain, with one tile accessible from Editorial and Music filters. The Vogue Czechoslovakia editorial reference to Sunday Morning is deliberately preserved because it represents another project.
- Recordings list: row 04 now displays Symmetry with Juno Francis and links to the verified Italians Do It Better release link `https://idib.ffm.to/symmetry`.
- New self-hosted poster `assets/symmetry-idib-official-video.webp` derives from the official label's 1280×720 YouTube artwork, optimized to WebP without cropping. CSS uses `object-fit:contain` to protect the embedded cover lettering.
- New video-detail page `work/symmetry/index.html` embeds the official `youtube-nocookie.com` player and links to KALTBLUT, the official YouTube video and the label. No unrelated project pages or photographs altered.
- Preserves Photography hidden status, official AM07 favicon, and no mobile emoji arrows. Automated checks updated to cover the new page and poster.
- Production status at authoring: pending PR merge and Cloudflare Pages deploy. Do not claim published before verifying the site's actual public HTML and media responses.

## 2026-10-25 / Selected Recordings link and Symmetry thumbnail

- The owner requested that **Selected recordings** open the official Parallel Vision releases section, not Alejandro's Bandcamp. The Selected Work card now links directly to `https://parallelvisionlabel.com/#releases`. The independent "Explore the full catalogue" Bandcamp link remains unchanged.
- The owner's screenshot showed the bright red, letter-heavy Italians Do It Better YouTube thumbnail beside another red portrait. The Symmetry card now uses a clean editorial group portrait from the KALTBLUT Symmetry feature, credited by the magazine to photographer **Amaan Hassen**.
- Source original: `https://www.kaltblut-magazine.com/wp-content/uploads/2021/05/JUNO-FRANCIS-APRIL-2021-6.jpg`, 1050 × 1575. Web display derivative: `assets/symmetry-kaltblut-editorial.webp`, 1160 × 1000, cropped for the 3-column card and WebP-encoded, no generative edits.
- The earlier label's official video thumbnail `assets/symmetry-idib-official-video.webp` is preserved for rollback and the standalone `work/symmetry/` page retains its official video embed and KALTBLUT premiere.
- Preserve the rest of the nine selected works, original Purple wordmark, AM07 favicon, current mobile no-arrows rule, and temporarily unpublished Photography archive.
- Regression checks explicitly verify the release destination, alternative image, lack of Bandcamp link on that project card, and no mobile emoji arrows.
- Publication via Cloudflare Pages is not confirmed by a GitHub write. Require green checks plus real live-domain verification before claiming success.

## 2026-10-26 / Vogue film still and Culto SoundCloud recording

- Replaced the artificial blue typography-only Vogue Czechoslovakia tile with the third still supplied by the owner (close-up lips and reflective sculptural object) and the **exact Vogue SVG wordmark** supplied as `VOGUE_LOGO.svg`. Original files are preserved in `assets/vogue-cowgirls-still.webp` and `assets/vogue-wordmark.svg`. The WebP is a direct resized/optimized crop of the supplied 482×844 frame, removing the player mute overlay at the bottom; no generated media.
- Design: dark left editorial matte containing the actual white-rendered SVG Vogue wordmark and small project descriptors, with the source portrait intact on the right. The real logo is not recreated with CSS text. Desktop and mobile CSS keep the link clickable and follow the no-arrow-on-mobile policy.
- Vogue tile now links to the owner's original Instagram post `https://www.instagram.com/p/CLmkIbGqlWE/`, in place of the secondary Get Some Magazine article. The independent caption keeps `Even Cowgirls Have the Blues` and the Sunday Morning music connection.
- The **Recordings** list item 02 for Culto a la Vida now uses the exact owner-supplied `https://on.soundcloud.com/NrWLxctxKnFdLw2scq` instead of Apple Music. Verified via HTTP 302 redirect to `https://soundcloud.com/parallelvisionlabel/sets/alejandro-molinari-culto-a-la` and 200 response.
- The separate Culto a la Vida Purple Diary project card continues linking to its Purple article; it is intentionally not changed. The Selected Recordings card still opens `https://parallelvisionlabel.com/#releases`.
- All nine projects, Symmetry film, temporary photography unpublication, AM07 favicon, and previously approved artwork remain intact. Automated regression checks validate both user-supplied images, project link and new recording link.
- Publication to be confirmed by successful Cloudflare Pages check plus actual live-domain HTTP verification of HTML, WebP, SVG and CSS.

## 2026-10-26 / Purple Radiooooo editorial recognition

- Owner clarified the original Purple Magazine/Dairy editorial was Alejandro Molinari's **vision of music in the future**, originally represented as a vision of the year 2070, and that the blue illustrated Alejandro portrait was artwork by designer **Noemí First** (credit supplied by owner).
- Public Purple Diary article verified at `https://purple.fr/diary/alejandro-molinari-for-purple-future-radiooooo/`, published **July 14, 2022**, under the exact title "Alejandro Molinari for Purple Future Radiooooo". The article discusses listening through future sensory systems, other-world resonances and social/emotional functions for new tonalities.
- Homepage Radiooooo tile preserves the original `assets/radiooooo-portrait.webp` illustration unchanged, the exact publisher link, nine Selected Works, and the previously approved label/project ordering.
- Publisher identity is now displayed in the text metadata immediately below the blue portrait: **authentic Purple logo** reused from `assets/purple-diary-logo.png`, publisher metadata "DIARY / 14 JUL 2022", project title "Purple Future Radiooooo", narrative "A vision of music in 2070", and explicit "Artwork by Noemí First" credit.
- Design objective: strong publisher recognition without covering the portrait or inventing another image; no overlapping typography or mobile decorative arrows. CSS uses small restrained publisher masthead and left-aligned editorial byline.
- Replaced the previous generic "Commissioned contribution" summary. No other artworks, links, recordings, portrait assets or Photography visibility changed. Production publish must be verified separately via Cloudflare Pages check and live-domain HTML/CSS.
