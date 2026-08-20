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
  mangoHotgrill: P("mango-falooda-hotgrill.jpg"),
  kerala: P("kerala-falooda.jpg"),
  kerala2: P("kerala-falooda-2.jpg"),
  kulfi: P("kulfi-falooda.jpg"),
  arabic: P("arabic-falooda.jpg"),
  arabic2: P("arabic-falooda-2.jpg"),
  avocado: P("avocado-falooda.jpg"),
  blackberry: P("blackberry-falooda.jpg"),
  blueberry: P("blueberry-falooda.jpg"),
  passionFruit: P("passion-fruit-falooda.jpg"),
  mumbai: P("mumbai-style-falooda.jpg"),
  tender: P("tender-falooda.jpg"),
  royalHotgrill: P("royal-falooda-hotgrill.jpg"),
  strawberryHotgrill: P("strawberry-falooda-hotgrill.jpg"),

  // Promos / posters
  promoKunafa: P("promo-kunafa-falooda.jpg"),
  promoCoffee: P("promo-coffee-hard.jpg"),
  posterCoffeeFloat: P("poster-coffee-float.jpg"),
  posterDarkOreo: P("poster-dark-oreo.jpg"),
  posterPassionFruit: P("poster-passion-fruit.jpg"),

  // Storefronts
  storefront1: P("storefront-1.jpg"),
  storefront2: P("storefront-2.jpg"),
  storefront3: P("storefront-3.jpg"),
  storefront4: P("storefront-4.jpg"),
  storefront5: P("storefront-5.jpg"),
  storefront6: P("storefront-6.jpg"),
  storefront7: P("storefront-7.jpg"),
  storefront8: P("storefront-8.jpg"),
  storefront9: P("storefront-9.jpg"),
  storefront10: P("storefront-10.jpg"),
  storefront11: P("storefront-11.jpg"),
  storefront12: P("storefront-12.jpg"),
  storefront13: P("storefront-13.jpg"),

  // Openings
  opening: P("store-grand-opening.jpg"),
  opening2: P("store-grand-opening-2.jpg"),
  opening3: P("opening-2.jpg"),
  opening4: P("opening-3.jpg"),
  opening5: P("opening-4.jpg"),
  opening6: P("opening-5.jpg"),
  opening7: P("opening-6.jpg"),
  opening8: P("opening-7.jpg"),
  opening9: P("opening-8.jpg"),
  opening10: P("opening-9.jpg"),
  opening11: P("opening-10.jpg"),
} as const;

export type PhotoKey = keyof typeof PHOTOS;

/** Storefront + opening-day photography — used on the About page only. */
export const BRANCH_PHOTOS: { src: string; alt: string }[] = [
  { src: PHOTOS.storefront7, alt: "Falooda Club shopfront with illuminated signage" },
  { src: PHOTOS.storefront6, alt: "Falooda Club counter and seating at night" },
  { src: PHOTOS.storefront8, alt: "Falooda Club and Bublee kiosk on a Dubai street" },
  { src: PHOTOS.storefront9, alt: "Falooda Club kiosk service window" },
  { src: PHOTOS.storefront10, alt: "Falooda Club kiosk beside Carryfood market" },
  { src: PHOTOS.storefront11, alt: "Falooda Club kiosk exterior in daylight" },
  { src: PHOTOS.storefront12, alt: "Falooda Club kiosk under a tree on a residential street" },
  { src: PHOTOS.storefront13, alt: "Falooda Club and Bait Al Kanafa storefront" },
  { src: PHOTOS.storefront1, alt: "Falooda Club storefront" },
  { src: PHOTOS.storefront3, alt: "Falooda Club shop counter" },
  { src: PHOTOS.storefront5, alt: "Falooda Club shopfront at night" },
  { src: PHOTOS.opening3, alt: "Falooda Club branch opening with balloon arch" },
  { src: PHOTOS.opening4, alt: "Opening day at a Falooda Club branch" },
  { src: PHOTOS.opening5, alt: "Balloon arch at a Falooda Club branch opening" },
  { src: PHOTOS.opening6, alt: "Guests at a Falooda Club branch opening" },
  { src: PHOTOS.opening7, alt: "Falooda Club branch opening day" },
  { src: PHOTOS.opening8, alt: "Falooda Club branch opening, wide view" },
  { src: PHOTOS.opening9, alt: "Falooda Club kiosk opening day" },
  { src: PHOTOS.opening10, alt: "Customers at a Falooda Club branch opening" },
  { src: PHOTOS.opening11, alt: "Ribbon cutting at a Falooda Club branch opening" },
  { src: PHOTOS.opening, alt: "Falooda Club grand opening" },
  { src: PHOTOS.opening2, alt: "Falooda Club branch opening celebration" },
];
