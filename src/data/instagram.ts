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
  { 
    image: hero, 
    alt: "Strawberry falooda",
    permalink: "https://www.instagram.com/p/DWY3r-CjC8f/?hl=en"
  },
  { 
    image: featured, 
    alt: "Falooda line-up",
    permalink: "https://www.instagram.com/p/DYPFFj1MPcD/?hl=en"
  },
  { 
    image: milkshake, 
    alt: "Crush milkshake",
    permalink: "https://www.instagram.com/p/DaDOIGrszXw/?hl=en"
  },
  { 
    image: lassi, 
    alt: "Mango lassi",
    permalink: "https://www.instagram.com/p/DX2K1YLMtMP/?hl=en"
  },
  { 
    image: mojito, 
    alt: "Watermelon mojito",
    permalink: "https://www.instagram.com/p/DbIkCo1scr9/?hl=en"
  },
  { 
    image: sundae, 
    alt: "Chocolate sundae",
    permalink: "https://www.instagram.com/p/DaaEJYFsJ1g/?hl=en"
  },
  { 
    image: fruit, 
    alt: "Fruit salad with ice cream",
    permalink: "https://www.instagram.com/p/DXtmxXODI5P/?hl=en"
  },
  { 
    image: burger, 
    alt: "Burger meal",
    permalink: "https://www.instagram.com/p/DZfCxQGMPNi/?hl=en"
  },
  { 
    image: juices, 
    alt: "Fresh juices",
    permalink: "https://www.instagram.com/p/DOn0CHND2VB/?hl=en"
  },
];
