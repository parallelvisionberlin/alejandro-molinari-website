# Alejandro Molinari website

## Current task

- Updated: 2026-10-21.
- Request: use the approved AM monogram as the favicon on the apex and www domains.
- Repository: `parallelvisionberlin/alejandro-molinari-website`.
- Production branch: `main`.
- Inspected base commit: `1988e12aef2e3a4386c9d6e0f11c7300daa70b46`.
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
- Publication: pending atomic commit to the current main branch.
- Production favicon: pending browser verification on both domains.
- Direct shell HTTP access returns 403 in this environment; the browser loads the apex site.
