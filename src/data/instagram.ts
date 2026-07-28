/**
 * Curated Instagram grid data for @faloodaclubuae.
 *
 * ─── Upgrade path to live Instagram embeds ─────────────────────────────
 * To swap this static grid for official Instagram post embeds:
 *   1. Provide 6–9 specific post permalinks (https://www.instagram.com/p/…).
 *   2. Add <script async src="//www.instagram.com/embed.js"></script>
 *      to the head in src/routes/__root.tsx.
 *   3. Replace each tile in <InstagramGrid> with:
 *        <blockquote class="instagram-media" data-instgrm-permalink="…" />
 *   4. Call window.instgrm?.Embeds.processEmbeds() on mount.
 * Alternatively, drop in a Behold / EmbedSocial widget id here and render
 * their <div data-embed-id="…" /> — same layout, no code changes needed.
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
  followers: "12.4K",
  bio: "Faloodas · Juices · Broasted · Port Saeed, Dubai",
};

export type IGPost = {
  image: string;
  caption: string;
  likes: string;
  comments: string;
};

export const IG_POSTS: IGPost[] = [
  {
    image: hero,
    caption: "STRAWBERRY FALOODA — the tall glass that started it all. AED 15 all day.",
    likes: "1.2K",
    comments: "48",
  },
  {
    image: featured,
    caption: "Pista · Strawberry · Mango. Pick your poison. 🌹",
    likes: "986",
    comments: "31",
  },
  {
    image: milkshake,
    caption: "NUTELLA CRUSH weather. Rain check ✓",
    likes: "742",
    comments: "22",
  },
  {
    image: lassi,
    caption: "Mango lassi with saffron. Deira mornings.",
    likes: "654",
    comments: "18",
  },
  {
    image: mojito,
    caption: "WATERMELON MOJITO. AED 12. Nothing more to say.",
    likes: "823",
    comments: "27",
  },
  {
    image: sundae,
    caption: "Chocolate sundae — three scoops, one lava, zero regrets.",
    likes: "1.1K",
    comments: "44",
  },
  {
    image: fruit,
    caption: "Fruit salad with a scoop. Late-lunch fuel from Port Saeed.",
    likes: "512",
    comments: "12",
  },
  {
    image: burger,
    caption: "The ZINKER BURGER meal — AED 10 well spent.",
    likes: "934",
    comments: "36",
  },
  {
    image: juices,
    caption: "13 flavors, pressed to order. Point and choose. 🍊🥭🍓",
    likes: "678",
    comments: "19",
  },
];
