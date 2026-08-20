# New branch photos in, broken image slots out

## What the folders actually contain

`public/photosnew/` has 17 images — all of them storefront, signage and branch-opening shots (Rigga, Abu Hail, Al Waraqa, Bait Al Kanafa / Bublee frontages, ribbon-cutting and balloon-arch openings). None are food.

`public/photos/` is now missing 11 files the site still points at: `special-club-falooda-2`, `classic-falooda`, `kulfi-falooda-2`, `blackberry-falooda-2`, `brownie-bowl`, `oreo-bowl`, `caramel-cup`, `fruit-sundae`, `strawberry-sundae`, `nutella-crepe`, `mango-juice`. Those are the broken/empty image tags on the home page (hero uses `special-club-falooda-2`), gallery, category tiles, product rail and About grid.

## 1. Import and name the new photos

- Move all 17 files from `public/photosnew/` into `public/photos/` with clean slugs: `branch-rigga-1.jpg`, `branch-abu-hail-1.jpg`, `branch-al-waraqa-1.jpg`, `opening-1.jpg` … `opening-6.jpg`, `storefront-6.jpg` … etc. Convert the `.PNG` files to `.jpg` for weight (they are photographs, 400–760 KB each).
- Register every one in `src/data/photos.ts` under a `storefronts` / `openings` grouping with real alt text.
- Delete the now-empty `public/photosnew/` folder.

## 2. No empty image tags anywhere

Every reference to a deleted file gets repointed to a photo that exists:

- Home hero: `special-club-falooda.jpg` (the one that survived).
- Category tiles: Faloodas → special club; Sundaes & Bowls → kulfi falooda; Juices & Shakes → mango falooda.
- Product rail: rebuilt from surviving falooda photos only (special club, kulfi, mango, arabic, blackberry, blueberry, avocado, tender, kerala, mumbai style, passion fruit, royal hotgrill, strawberry hotgrill) with names matching the photo.
- About grid: storefront + opening photos instead of the deleted bowl/juice shots.
- Gallery: every tile is a falooda/promo photo that exists.

Since there are no new food shots, non-falooda items (crepes, bowls, sundaes, juices) simply don't get photo tiles for now — better an honest falooda-led grid than a broken tile. When you upload food photos I'll slot them straight back in.

## 3. Gallery becomes food-only

- Remove `storefront-1`, `storefront-3`, `storefront-5`, `store-grand-opening` from the gallery list.
- Refill the masonry with the remaining falooda and promo/poster photos so the grid stays full and the column rhythm (3/4, 4/3, square, 4/5) is preserved.

## 4. About page becomes the branch story

- Replace the small 4-image About grid with a proper editorial branch section built from the new photos: a large storefront lead image, then a masonry/grid of the three branch frontages and the opening-day shots, with the same clip-path reveal motion used elsewhere.
- Keeps the existing "Since 2019" hero and factual copy — no new invented captions, alt text only.

## 5. Home page

- The "Three branches" block keeps a storefront photo, upgraded to one of the new sharper frontage shots.
- Final CTA keeps the kunafa promo backdrop.
- No other home copy or layout changes.

## Technical notes

- `src/data/photos.ts` stays the single source of truth for path + alt; all components read keys from it, so no literal paths in components.
- Files stay in `public/photos/` served by absolute path (no bundler imports), so you can keep dropping photos in.
- Verification pass: load home, gallery and about in a headless browser and assert every `<img>` has `naturalWidth > 0` — that's the check that "no empty image tags" is actually true.
