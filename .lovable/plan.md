## Goal

Move the site from a templated, AI-generated feel to something that reads as an intentional, agency-crafted brand experience, and integrate the real Instagram presence for @faloodaclubuae.

## Design direction: Editorial Warmth

One committed identity, applied consistently:

- **Palette shift** — cream canvas `#faf6ee`, near-black ink `#1a1613`, brand orange used as a single hero accent, deep green as secondary. Retire the tri-color gradient hero blobs and the rainbow card backgrounds — they read as generic AI output.
- **Typography** — pair **Fraunces** (display, italic optical size for headlines) with **Söhne-style neue-grotesk** (via **Inter Tight** or **General Sans**) for body. Real editorial hierarchy: oversized display, small-caps eyebrows, tight tracking on numerals, generous leading.
- **Layout language** — asymmetric magazine grid, off-axis image placement, wide horizontal rules, index-style numbering ("01 — Signature"), left-aligned everything, no centered eyebrow chips. Card radius drops from `2rem`/`3rem` blobs to a restrained `12px` (0.75rem) with one hero element on `24px`. Retire glassmorphism entirely.
- **Imagery** — full-bleed photography with generous negative space, black-and-white or duotone crossfades on secondary shots, real captions with location/date metadata.
- **Motion** — quiet and purposeful: text mask reveals on scroll, horizontal marquee for menu categories, image parallax on hero, no bouncy `y: 20` fade-ups on every element. Motion via `motion/react` with a single shared spring.
- **Micro-details that break the "AI" tell** — asymmetric section numbering, editorial pull-quotes, a running footer marquee, hand-written-style Arabic accents beside select headlines, a "Since 2019" wordmark lockup, structured spec tables in About/Locations.

## Instagram integration

Since no post URLs were supplied and no third-party widget account exists yet, ship the **curated IG-styled gallery** now and leave a clean upgrade path:

- Replace the current `InstagramFeed` with a proper Instagram-style module: 3-across on desktop / 2-across on mobile, square tiles, hover reveals caption + like/comment counts, "View on Instagram" overlay linking to `instagram.com/faloodaclubuae`, header with @handle, follower stat, bio line, and Follow button styled like IG's.
- Use 9 of the generated food images as tiles with realistic captions (written to match Falooda Club's tone: emoji-light, location tags, product names in ALL CAPS).
- Add a `src/data/instagram.ts` module so posts are one edit away from being replaced with real embeds later.
- Document in a code comment how to swap to official `<blockquote class="instagram-media">` embeds once real post URLs are provided (script loader added to `__root.tsx` head, commented out until needed).

If the user later provides post URLs or a Behold/EmbedSocial key, we swap the data source without touching layout.

## Page-by-page changes

**Home**
- New hero: full-bleed editorial split — left column oversized Fraunces headline with italic accent word, small metadata block ("Est. 2019 · Port Saeed, Dubai · Open till 2am"), single primary CTA + text link. Right column single hero image with parallax, corner-pinned "Today's pour" caption card. Kill the three gradient blobs and the floating logo chip.
- Featured Faloodas → numbered index list "01 / 02 / 03" with large image, name in Fraunces italic, tasting-note description, price as tabular figures.
- Signature Desserts → asymmetric zigzag rows, alternating image side, pull-quote between rows.
- Best Sellers → horizontal marquee that pauses on hover, ticker-style.
- Why Choose → four-column spec table with hairline dividers, no icon cards on rounded backgrounds.
- Reviews → single large rotating quote with source logo (Talabat/Google/Zomato), pagination dots, not a 3-up card grid.
- Instagram → new module described above.
- FAQ → left column heading sticky, right column accordion, no cream section background.
- Final CTA → dark cream block with oversized wordmark, delivery partner logos as real inline SVG marks (not text placeholders).

**Menu**
- Sticky category rail on the left (desktop) / horizontal chip scroll (mobile), search input redesigned as a hairline underline input, results shown as editorial two-column list with price dot-leaders (`Pista Falooda ·············· AED 15`) rather than cards. Keep Arabic names as a smaller secondary line.

**About** — long-form editorial: pull-quote hero, timeline strip, founder note, spec sidebar.

**Gallery** — proper masonry with varied aspect ratios, lightbox on click.

**Locations** — split layout: address block with structured metadata (hours as a table, phone as tabular numerals), map takes the full right side and bleeds off-canvas.

**Contact** — one-column form, floating labels, inline validation, WhatsApp remains the submit target.

**Navbar** — hairline border instead of glass blur; wordmark on left, links center, order CTA right. Mobile drawer becomes a full-screen editorial menu with large link type.

**Footer** — running marquee wordmark on top edge, four columns with proper hierarchy, real social icons, "© Falooda Club 2026 — Crafted in Dubai" line.

## Technical

- Update `src/styles.css`: new color tokens (`--ink`, `--cream`, `--accent`), remove `--brand-gradient` usage from components, add `--font-display` / `--font-sans`, add `text-balance` and small-caps utilities, remove blob animation, add marquee + reveal keyframes.
- Swap Google Fonts import in `__root.tsx` to Fraunces + Inter Tight.
- New shared components: `EditorialHero`, `NumberedList`, `Marquee`, `PullQuote`, `SpecTable`, `InstagramGrid`, `DotLeader`.
- New `src/data/instagram.ts` with 9 curated posts (image ref, caption, likes, comments, permalink → profile URL fallback).
- Refactor all six route files to consume the new components. Keep menu data and site data unchanged.
- Motion: single `useReducedMotion`-aware config; replace per-element `initial/animate/whileInView` scatter with a shared `<Reveal>` wrapper.
- Accessibility: verified focus rings on the new hairline inputs and dark CTAs, aria labels on marquee (pause control), `prefers-reduced-motion` respected across marquee, parallax, and reveals.

## What stays

Menu items, prices, business info, WhatsApp CTA, delivery partner links, TanStack Start routing, motion/react.

## Out of scope

- Real live Instagram embeds (needs post URLs or a widget key from you — swap-in path is prepared).
- Backend/CMS for editable content.
- New photography beyond what's already generated.

## Follow-up you can send anytime

- Paste 6–9 Instagram post URLs to switch the grid to official embeds.
- Share a Behold or EmbedSocial embed key if you'd rather auto-sync.
