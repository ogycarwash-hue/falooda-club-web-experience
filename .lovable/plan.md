## Goal

The site currently reads like AI wrote it: invented tasting notes ("basil seeds soaked at sunrise"), fake museum captions ("Fig. 01"), fabricated Instagram captions with made-up like counts, fabricated reviews, and long paragraphs everywhere. FiLLi Cafe's site does the opposite — huge product photography, three-to-eight word headlines, one short factual sentence, then buttons. That is the target.

## Principles applied everywhere

1. **Copy budget.** Every section: one headline (max 6 words), optionally one factual sentence (max 20 words), one action. Nothing else.
2. **Only verifiable facts.** Product names, prices, address, hours, phone, delivery partners. No invented ingredient poetry, no fake awards, no fake review quotes, no fake engagement numbers.
3. **Image does the talking.** Photography gets the space that paragraphs currently occupy — full-bleed, large tiles, generous crops.
4. **Motion is felt, not seen.** Slow parallax on hero imagery, image scale-in on scroll, hover crossfade/zoom on tiles, a paused-on-hover marquee, animated counters on the stats strip, sticky-scroll transitions. Consistent easing and duration; nothing bouncy, nothing on every element.

## Page-by-page

**Home** — reduce from 10 sections to 7:
- Hero: full-bleed falooda photo with warm gradient wash, headline + one line + two buttons (Order Now / View Menu). Slow parallax, no "spec block" of stats, no corner caption card.
- Category tiles: 3 large photo cards (Faloodas / Shakes & Juices / Broasted & Meals) — image, label, arrow on hover zoom. Replaces the numbered "01/02/03" tasting-note index.
- Signature strip: horizontal scroll/marquee of product photos with name + price only. Replaces the zigzag with paragraph descriptions.
- Stats band: 3 animated numbers (Since 2019, open till 2 AM, 60+ items) — no sentences.
- Instagram: photo grid only, real handle header, "Follow" link. Remove all fabricated captions, like counts, comment counts.
- Locations teaser: photo + address block + map link.
- Order CTA: dark band, wordmark, delivery partner buttons.
- Cut entirely: "Why Choose Us" spec table, the rotating fake review quote, the FAQ accordion (or keep a 4-item factual FAQ on Contact instead, answering only real logistics).

**Menu** — image-led category grid at the top, then a clean price list; drop invented item descriptions, keep name + Arabic name + price.

**About** — one short brand statement (3 sentences maximum), then a photo grid. Remove the invented founder narrative and timeline unless you supply real dates.

**Gallery** — becomes the visual centrepiece: masonry with varied aspect ratios, lightbox, no captions.

**Locations / Contact** — factual only: address, hours table, phone, WhatsApp, map. No copy flourishes.

**Navbar / Footer** — trimmed to links + order CTA; footer keeps address, hours, socials, delivery partners.

## Technical notes

- Reduce `src/routes/index.tsx` from ~600 lines to a lean set of section components; extract `CategoryTiles`, `ProductRail`, `StatsBand`, `PhotoGrid` into `src/components/`.
- Strip the fake caption/like/comment fields from `src/data/instagram.ts`; keep image + permalink only.
- Remove `REVIEWS` and (if FAQ is cut) `FAQ` from `src/data/site.ts`.
- Keep the existing cream/ink/orange token system and Fraunces + Inter Tight pairing — that part already reads as designed, not generated.
- Animations via `motion/react` with one shared transition constant, plus `useScroll` parallax on hero and gallery.

## What I need from you (optional)

Real photos of your actual products/store would lift this further than anything else — the current images are generated stand-ins. If you have an Instagram post list or a photo folder, drop it in and I'll wire the real assets instead.
