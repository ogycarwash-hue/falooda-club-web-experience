# Add 3 reels to the Instagram grid + enhancement pass

The Instagram grid works as it stands — the embed script handling in `src/components/InstagramGrid.tsx` stays exactly as it is. No rewrite, no change to the script loading, the retry loop, or the blockquote markup.

## 1. Add the three reels at the top

Only `src/data/instagram.ts` changes: three new entries prepended to `IG_POSTS`, tracking query strings (`?igsh=...`) dropped since embeds only need the clean permalink.

```text
https://www.instagram.com/reel/C9KvG_mKJAb/
https://www.instagram.com/reel/C-U-4RXv4eu/
https://www.instagram.com/reel/C-IjmLXy5lW/
… then the 9 existing posts
```

Reels use the same `/reel/` permalink format that `embed.js` already handles, so they render through the existing component untouched.

## 2. Grid presentation (additive only)

- Show the first 6 tiles, with a "Load more" button revealing the rest — 12 live iframes on first paint is slow, and reels are heavier than photos. Existing embeds still mount the same way when revealed; `processEmbeds()` is called again after the reveal so newly mounted blockquotes resolve.
- Keep every permalink as a plain link so all 12 remain reachable and crawlable.

## 3. Other improvements across the site

- **Gallery lightbox**: add Escape to close, arrow keys to step between photos, and body-scroll lock while open. Current behaviour (click to open, X to close) is preserved.
- **Reduced motion**: gate the hero parallax, footer marquee and product rail auto-scroll behind `useReducedMotion` so the site is calm for users who ask for it.
- **Image stability**: aspect-ratio boxes and `decoding="async"` on gallery and rail images so nothing shifts as photos load.
- **Locations page**: give each branch a photo, tap-to-call number and Directions button, matching the homepage Visit block.
- **Menu**: sticky category nav that jumps to each section — the menu is long on mobile.
- **Share previews**: add `og:image` / `twitter:image` with a real absolute photo URL on the home, menu and gallery routes.
- **Accessibility**: focus-visible rings on dark CTAs, `aria-label` on icon-only social and lightbox buttons.

## Technical notes

- `InstagramGrid.tsx` gets only the pagination wrapper; the `useEffect` embed logic is left byte-identical apart from re-running the existing `process()` after "Load more".
- No backend or data-model change. All edits sit in data files, route files and presentation components.
