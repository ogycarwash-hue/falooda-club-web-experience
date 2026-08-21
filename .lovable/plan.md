# New photos, final storefronts, and a polish pass

## 1. New gallery photos + fix broken slots

Two files referenced by the site no longer exist in `public/photos`, so the gallery and the homepage product rail currently render broken images:

- `mango-falooda-hotgrill.jpg`
- `strawberry-falooda-hotgrill.jpg`

Fix: remove those two entries from the photo manifest and every place that uses them, then add the 8 uploads from `public/photosnew1` as replacements and new gallery items:

Blueberry Falooda, Carrot Falooda, Ice Cream, Mixed Ice Cream, Loaded Fries, Zinger Fries, Running Falooda, "Sip Happiness".

Steps:
- Rename the uploads to clean web-safe slugs (no spaces / double extensions) and move them into `public/photos` alongside the rest, then compress them — several are 2 MB+, which is far too heavy for mobile.
- Add them to the photo manifest with proper descriptive alt text.
- Insert into the gallery masonry with mixed aspect ratios so the grid keeps its editorial rhythm.
- Use the two savoury shots (Loaded Fries, Zinger Fries) and an ice-cream shot on the homepage category tiles / product rail so the home page shows the wider menu, not only faloodas.
- Verify zero broken `<img>` on home, gallery, menu, about.

## 2. About page: replace storefront photos

Drop all current storefront and opening-day photos from the About page and use only the 5 finals in `public/storefrontphotosfinal`.

- Rename/convert to slugged JPGs (the PNGs are 400–760 KB; JPG conversion cuts that heavily) and move into `public/photos`.
- Rebuild the branch photo list around these 5: one lead wide shot plus a 2×2 grid, instead of the current 20-tile masonry — with 5 photos a tighter, larger layout reads much better.
- Delete the now-unused storefront/opening entries from the manifest so nothing references removed files.

## 3. Layout, animation, mobile and SEO pass

Layout / animation
- About branch section: staggered reveal on all 5 photos with a lower scroll trigger threshold so nothing stays invisible.
- Gallery: fade-up stagger by column, plus a shared-element style zoom into the lightbox and swipe-to-navigate on touch.
- Homepage: tighten section spacing on small screens, and make the stats band and category tiles reveal on scroll rather than on load.
- Respect `prefers-reduced-motion` everywhere (already partly done — extend to remaining reveals).

Mobile
- Product rail and marquee: smaller cards and faster travel on phones; make the rail swipeable rather than purely auto-scrolling.
- Gallery lightbox: full-bleed on mobile, larger tap targets, safe-area padding.
- Menu cards and hero type scale checked at 375 px; fix any overflow.
- Add explicit `width`/`height` on images to stop layout shift, `loading="lazy"` plus `decoding="async"` on everything below the fold, and eager-load only the hero.

SEO
- Every route gets a self-referencing absolute canonical and `og:url` on `https://falooda-club-web-experience.lovable.app`, plus per-route `og:image` using a real photo from that page.
- Add `LocalBusiness` JSON-LD (3 branches, hours, phones) on Locations, `Restaurant` + `Menu` JSON-LD on Menu, `BreadcrumbList` on inner routes, `Organization` sitewide.
- Add `public/sitemap.xml` covering all six routes and reference it from `robots.txt`.
- Single H1 per page, descriptive alt text on every new photo.

## Technical notes

- Image processing (rename, JPG conversion, resize to max 1600 px, quality ~80) done with a one-off Python/PIL script; originals in `photosnew1` and `storefrontphotosfinal` are left untouched.
- `src/data/photos.ts` stays the single manifest; all pages read from it.
- No backend changes.
