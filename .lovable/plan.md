# Add 3 reels to the top of the Instagram grid + fix previews + site review

## 1. The three reels

Add the reels first in the grid, before the nine existing posts (Instagram query strings like `?igsh=...` are stripped — only the clean permalink is used):

- `/reel/C9KvG_mKJAb/`
- `/reel/C-U-4RXv4eu/`
- `/reel/C-IjmLXy5lW/`

## 2. Make the previews actually render

Two concrete problems in `src/components/InstagramGrid.tsx`:

- The permalink attribute is built as `${post.permalink}?utm_source=ig_embed&am;utm_campaign=loading` — the `&am;` is a broken entity, so the URL Instagram receives is malformed. Fix: pass the bare permalink with no query string.
- Reels need `data-instgrm-version="14"` on a `blockquote` whose inner placeholder is replaced wholesale; the current markup keeps a custom skeleton inside the blockquote which stays visible when the embed fails.

Changes:
- Wrap each embed in a fixed-ratio container so the section never collapses or jumps while embeds resolve.
- Render a real fallback card underneath (photo thumbnail + "View on Reel/Post") that is hidden once the iframe is detected, so a blocked `embed.js` (ad blockers, preview iframe) still shows a clickable card instead of a blank tile.
- Re-run `processEmbeds()` on mount, on script load, and once more after a short delay; stop retrying once every blockquote has an iframe child.
- Show 6 embeds by default with a "Load more" reveal so the section isn't 12 heavy iframes on first paint (all 12 still crawlable via links).

## 3. Website review — improvements to make in this pass

Small, high-value fixes found while reviewing:

- **Gallery**: lightbox has no keyboard support — add Escape to close, arrow keys to move between photos, and lock body scroll while open.
- **Images**: add explicit `width`/`height` or aspect-ratio boxes plus `decoding="async"` on the gallery and rail images so photos don't shift layout as they load.
- **Motion**: respect `prefers-reduced-motion` — currently the marquee, parallax hero and auto-scrolling rail all keep moving. Gate them behind a `useReducedMotion` check.
- **Locations page**: give each of the three branches a photo, a tap-to-call number and a Directions button so it matches the homepage Visit block.
- **Menu**: sticky category nav that scrolls to each section, so the long menu is navigable on mobile.
- **Head metadata**: confirm every route has a unique title/description and that `og:image` points at a real absolute photo URL for share previews.
- **Accessibility**: focus-visible rings on the dark CTA buttons, and `aria-label` on the icon-only social and lightbox close buttons.

## Technical notes

- `src/data/instagram.ts` grows to 12 entries with an optional `type: "reel" | "post"` and an optional fallback photo key from `src/data/photos.ts`.
- No backend or data-model change; all edits are in components, route files and data files.
