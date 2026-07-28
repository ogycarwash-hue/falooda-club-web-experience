/**
 * Instagram grid for @faloodaclubuae.
 *
 * Images only — no invented captions or engagement numbers. Every tile links
 * to the real profile.
 *
 * ─── Upgrade path to live Instagram embeds ─────────────────────────────
 *   1. Provide 6–9 post permalinks (https://www.instagram.com/p/…) and set
 *      them as `permalink` on each post below.
 *   2. Add <script async src="//www.instagram.com/embed.js"></script>
 *      to the head in src/routes/__root.tsx.
 *   3. Swap each tile for <blockquote class="instagram-media" …/> and call
 *      window.instgrm?.Embeds.processEmbeds() on mount.
 * ────────────────────────────────────────────────────────────────────────
 */
import featured from "@/assets/featured-faloodas.jpg";
import hero from "@/assets/hero-falooda.jpg";
import milkshake from "@/assets/milkshake.jpg";
import lassi from "@/assets/lassi.jpg";
import sundae from "@/assets/sundae.jpg";
import mojito from "@/assets/mojito.jpg";
import fruit from "@/assets/fruit-salad.jpg";
import burger from "@/assets/burger.jpg";
import juices from "@/assets/juices.jpg";

export const IG_PROFILE = {
  handle: "faloodaclubuae",
  url: "https://www.instagram.com/faloodaclubuae/",
};

export type IGPost = {
  image: string;
  alt: string;
  permalink?: string;
};

export const IG_POSTS: IGPost[] = [
  { image: hero, alt: "Strawberry falooda" },
  { image: featured, alt: "Falooda line-up" },
  { image: milkshake, alt: "Crush milkshake" },
  { image: lassi, alt: "Mango lassi" },
  { image: mojito, alt: "Watermelon mojito" },
  { image: sundae, alt: "Chocolate sundae" },
  { image: fruit, alt: "Fruit salad with ice cream" },
  { image: burger, alt: "Burger meal" },
  { image: juices, alt: "Fresh juices" },
];
