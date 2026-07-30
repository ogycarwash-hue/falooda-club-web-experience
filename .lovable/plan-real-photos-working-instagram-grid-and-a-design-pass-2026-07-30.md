# Real photos, working Instagram grid, and a design pass

## 1. Replace every generated image with your real photos

`public/photos/` has 42 real shots. They fall into clear groups based on filename and content:

- **Falooda flavours** — Classic, Kerala, Mumbai Style, Arabic, Mango, Strawberry, Blackberry, Blueberry, Avocado, Passion fruit, Kulfi, Tender, Special Club, Royal
- **Store / brand** — `Falooda Club outside store view`, `Falooda Club Grand Opening`
- **Food & dessert plates** — `DSC0…` series, `dessert.JPG`, WhatsApp shots (crepes, plated desserts, counter shots)
- **Hotgrill line** — the `- Hotgrill` files
- **Google review screenshots** — will NOT be used as photography (they're screenshots, not food shots)

Work:
- Rename the files to clean web-safe slugs (`classic-falooda.jpg`, `store-front.jpg`, …) and keep them in `public/photos/` so they're served directly (no bundler import needed, and the folder stays easy for you to update).
- Add `src/data/photos.ts` — a single named map of every photo with a real alt text, so images are picked by meaning, not by guessing paths in 6 different files.
- Swap the real photos into: homepage hero (store or a hero falooda shot), `CategoryTiles`, `ProductRail`, `gallery`, `about`, and the `Visit` section.
- Delete the AI-generated files in `src/assets/` (`hero-falooda.jpg`, `featured-faloodas.jpg`, `gallery-spread.jpg`, `milkshake.jpg`, `lassi.jpg`, `sundae.jpg`, `mojito.jpg`, `fruit-salad.jpg`, `juices.jpg`, `burger.jpg`). The logo pointer stays.
- Menu items get matched to their actual photo where the name lines up (Classic, Kerala, Mumbai, Mango, Kulfi, Royal, Special Club, etc.).

## 2. Fix the blank Instagram grid

Cause: `src/routes/index.tsx` still renders `@/components/InstagramGrid`, the old component that reads a `post.image` field. Your rewritten embed version lives in `src/data/instagram.tsx` and is never rendered — so the section shows empty tiles.

Fix:
- Move the embed component into `src/components/InstagramGrid.tsx` (component in components, data in data), delete the stale image-grid version, and keep `IG_POSTS` / `IG_PROFILE` in `src/data/instagram.tsx`.
- Make the embed reliable: give each blockquote a stable key and re-run `instgrm.Embeds.processEmbeds()` after mount and on script load; render a fixed-height skeleton so the section doesn't collapse while embeds resolve.
- Keep a visible fallback card (photo + "View on Instagram") if the embed script is blocked, so the section is never blank.

## 3. Footer clean-up

- Remove "Crafted in Dubai · Port Saeed, Clock Tower".
- Remove "Port Saeed · Dubai" from the footer marquee and replace the single-branch blurb with the three branches (Rigga, Abu Hail, Al Waraqa).
- Footer "Visit" column lists all three branches with their addresses instead of one generic line.

## 4. Design, layout and motion improvements

Homepage
- Hero: real store/product photo, slower parallax, subtle grain overlay, and a scroll cue. Headline mask-reveals line by line instead of a single fade.
- Category tiles: taller editorial ratio, image scale + label slide on hover, staggered clip-path reveal on scroll.
- Signatures rail: pause-on-hover already exists — add drag-to-scroll on touch, edge fade masks, and per-card lift.
- Stats band: keep counters, tighten to a single hairline-divided row.
- New section: three location cards with photo, branch name, and a Directions button (replaces the single-address Visit block).

Site-wide
- Sticky navbar that condenses on scroll (height + backdrop blur transition).
- Page transition fade on route change, plus a scroll-progress hairline at the top.
- Consistent reveal timing: one shared easing/duration token instead of ad-hoc values per component.
- Respect `prefers-reduced-motion` everywhere.
- Image treatment: blur-up placeholder + `aspect-ratio` boxes so nothing shifts while photos load.

Gallery
- Real photos in the masonry, keyboard-navigable lightbox (arrows + escape), and shared-element zoom into the lightbox.

Menu
- Each category header gets its real photo band; items with a matching photo show a small thumbnail.

## Technical notes

- Photos served from `public/photos/` by literal path; `src/data/photos.ts` is the single source of truth for path + alt.
- No backend, data model, or copy invention — text stays factual and unchanged apart from the footer/branch fixes.
- Instagram embeds load `https://www.instagram.com/embed.js` client-side; the fallback card covers ad-blockers and the preview iframe.
