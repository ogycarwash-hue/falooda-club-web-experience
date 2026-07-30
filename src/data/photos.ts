/**
 * Real Falooda Club photography.
 * Files live in /public/photos and are referenced by absolute URL.
 */
const P = (file: string) => `/photos/${file}`;

export const PHOTOS = {
  // Faloodas
  specialClub: P("special-club-falooda.jpg"),
  specialClub2: P("special-club-falooda-2.jpg"),
  classic: P("classic-falooda.jpg"),
  mango: P("mango-falooda.jpg"),
  mango2: P("mango-falooda-2.jpg"),
  mangoHotgrill: P("mango-falooda-hotgrill.jpg"),
  kerala: P("kerala-falooda.jpg"),
  kerala2: P("kerala-falooda-2.jpg"),
  kulfi: P("kulfi-falooda.jpg"),
  kulfi2: P("kulfi-falooda-2.jpg"),
  arabic: P("arabic-falooda.jpg"),
  arabic2: P("arabic-falooda-2.jpg"),
  avocado: P("avocado-falooda.jpg"),
  blackberry: P("blackberry-falooda.jpg"),
  blackberry2: P("blackberry-falooda-2.jpg"),
  blueberry: P("blueberry-falooda.jpg"),
  passionFruit: P("passion-fruit-falooda.jpg"),
  mumbai: P("mumbai-style-falooda.jpg"),
  tender: P("tender-falooda.jpg"),
  royalHotgrill: P("royal-falooda-hotgrill.jpg"),
  strawberryHotgrill: P("strawberry-falooda-hotgrill.jpg"),

  // Desserts & bowls
  brownieBowl: P("brownie-bowl.jpg"),
  oreoBowl: P("oreo-bowl.jpg"),
  caramelCup: P("caramel-cup.jpg"),
  fruitSundae: P("fruit-sundae.jpg"),
  strawberrySundae: P("strawberry-sundae.jpg"),
  nutellaCrepe: P("nutella-crepe.jpg"),

  // Juices
  mangoJuice: P("mango-juice.jpg"),

  // Store
  storefront1: P("storefront-1.jpg"),
  storefront2: P("storefront-2.jpg"),
  storefront3: P("storefront-3.jpg"),
  storefront4: P("storefront-4.jpg"),
  storefront5: P("storefront-5.jpg"),
  opening: P("store-grand-opening.jpg"),
  opening2: P("store-grand-opening-2.jpg"),

  // Promos / posters
  promoKunafa: P("promo-kunafa-falooda.jpg"),
  promoCoffee: P("promo-coffee-hard.jpg"),
  posterCoffeeFloat: P("poster-coffee-float.jpg"),
  posterDarkOreo: P("poster-dark-oreo.jpg"),
  posterPassionFruit: P("poster-passion-fruit.jpg"),
} as const;

export type PhotoKey = keyof typeof PHOTOS;
