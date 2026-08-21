/**
 * Real Falooda Club photography.
 * Files live in /public/photos and are referenced by absolute URL.
 */
const P = (file: string) => `/photos/${file}`;

export const PHOTOS = {
  // Faloodas
  specialClub: P("special-club-falooda.jpg"),
  mango: P("mango-falooda.jpg"),
  mango2: P("mango-falooda-2.jpg"),
  mango3: P("mango-falooda-falooda.jpg"),
  kerala: P("kerala-falooda.jpg"),
  kerala2: P("kerala-falooda-2.jpg"),
  kulfi: P("kulfi-falooda.jpg"),
  arabic: P("arabic-falooda.jpg"),
  arabic2: P("arabic-falooda-2.jpg"),
  avocado: P("avocado-falooda.jpg"),
  blackberry: P("blackberry-falooda.jpg"),
  blueberry: P("blueberry-falooda.jpg"),
  blueberry2: P("blueberry-falooda-2.jpg"),
  carrot: P("carrot-falooda.jpg"),
  running: P("running-falooda.jpg"),
  sipHappiness: P("sip-happiness.jpg"),
  passionFruit: P("passion-fruit-falooda.jpg"),
  mumbai: P("mumbai-style-falooda.jpg"),
  tender: P("tender-falooda.jpg"),
  royalHotgrill: P("royal-falooda-hotgrill.jpg"),

  // Ice cream & savoury
  iceCream: P("ice-cream-sundae.jpg"),
  mixedIceCream: P("mixed-ice-cream.jpg"),
  loadedFries: P("loaded-fries.jpg"),
  zingerFries: P("zinger-fries.jpg"),

  // Promos / posters
  promoKunafa: P("promo-kunafa-falooda.jpg"),
  promoCoffee: P("promo-coffee-hard.jpg"),
  posterCoffeeFloat: P("poster-coffee-float.jpg"),
  posterDarkOreo: P("poster-dark-oreo.jpg"),
  posterPassionFruit: P("poster-passion-fruit.jpg"),

  // Branches (final storefront set)
  branch1: P("branch-1.jpg"),
  branch2: P("branch-2.jpg"),
  branch3: P("branch-3.jpg"),
  branch4: P("branch-4.jpg"),
  branch5: P("branch-5.jpg"),
} as const;

export type PhotoKey = keyof typeof PHOTOS;

/** Storefront photography — used on the About page only. */
export const BRANCH_PHOTOS: { src: string; alt: string }[] = [
  { src: PHOTOS.branch3, alt: "Falooda Club shopfront with illuminated signage in Dubai" },
  { src: PHOTOS.branch4, alt: "Falooda Club branch exterior and service counter" },
  { src: PHOTOS.branch1, alt: "Falooda Club storefront on a Dubai street" },
  { src: PHOTOS.branch2, alt: "Falooda Club kiosk service window" },
  { src: PHOTOS.branch5, alt: "Falooda Club branch signage at night" },
];
