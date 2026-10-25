# Project continuity

Read `PROJECT-STATE.md` before substantive changes and update its relevant verified state when work is complete. Preserve unrelated site content and deployment settings.

## Non-negotiable mobile visual rule
- Do not render Unicode directional arrows as link decoration on this site. On iOS, characters such as U+2197 are rendered as blue emoji-square icons, which the owner specifically rejected.
- Never add raw Unicode arrow characters to `index.html` or `work/**/index.html` when editing links, captions, contact/navigation, music list, or footers.
- On screens at or below 760px, **no decorative arrows/icons next to links**. Link text remains clickable. On desktop, the existing `.ui-external-icon` has a CSS-drawn shape and `aria-hidden="true"`.
- Any brand change must reuse the exact approved AM07 mark in the favicon files. Preserve the current page wordmark unless separately directed. Do not substitute emoji or a typed faux logo.
- Run `node tests/verify-mobile-arrows.mjs` after modifying HTML or CSS, and check phone-width layouts before merging.
