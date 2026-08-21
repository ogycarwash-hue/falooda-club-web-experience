import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import { PHOTOS } from "@/data/photos";

const URL = "https://falooda-club-web-experience.lovable.app/gallery";
const OG = "https://falooda-club-web-experience.lovable.app/photos/special-club-falooda.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Falooda Club Dubai" },
      {
        name: "description",
        content:
          "Photographs from Falooda Club — faloodas, ice cream, loaded fries and fresh juices, served daily in Rigga, Abu Hail and Al Waraqa.",
      },
      { property: "og:title", content: "Gallery — Falooda Club Dubai" },
      {
        property: "og:description",
        content: "Faloodas, ice cream, fries and fresh juices, in photographs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: OG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://falooda-club-web-experience.lovable.app/",
            },
            { "@type": "ListItem", position: 2, name: "Gallery", item: URL },
          ],
        }),
      },
    ],
  }),
  component: Gallery,
});

const IMAGES = [
  { src: PHOTOS.specialClub, alt: "Special club falooda", ratio: "aspect-[3/4]" },
  { src: PHOTOS.running, alt: "Running falooda", ratio: "aspect-[4/5]" },
  { src: PHOTOS.iceCream, alt: "Ice cream sundae", ratio: "aspect-[4/3]" },
  { src: PHOTOS.kulfi, alt: "Kulfi falooda", ratio: "aspect-square" },
  { src: PHOTOS.loadedFries, alt: "Loaded fries", ratio: "aspect-[4/5]" },
  { src: PHOTOS.mango, alt: "Mango falooda", ratio: "aspect-square" },
  { src: PHOTOS.carrot, alt: "Carrot falooda", ratio: "aspect-[3/4]" },
  { src: PHOTOS.arabic, alt: "Arabic falooda", ratio: "aspect-[4/5]" },
  { src: PHOTOS.mixedIceCream, alt: "Mixed ice cream bowl", ratio: "aspect-[4/3]" },
  { src: PHOTOS.blackberry, alt: "Blackberry falooda", ratio: "aspect-[3/4]" },
  { src: PHOTOS.zingerFries, alt: "Zinger fries", ratio: "aspect-[4/5]" },
  { src: PHOTOS.blueberry, alt: "Blueberry falooda", ratio: "aspect-[4/3]" },
  { src: PHOTOS.blueberry2, alt: "Blueberry falooda topped with ice cream", ratio: "aspect-[3/4]" },
  { src: PHOTOS.avocado, alt: "Avocado falooda", ratio: "aspect-square" },
  { src: PHOTOS.sipHappiness, alt: "Falooda Club drinks lineup", ratio: "aspect-[4/5]" },
  { src: PHOTOS.kerala, alt: "Kerala falooda", ratio: "aspect-[4/5]" },
  { src: PHOTOS.mumbai, alt: "Mumbai style falooda", ratio: "aspect-[3/4]" },
  { src: PHOTOS.passionFruit, alt: "Passion fruit falooda", ratio: "aspect-[4/3]" },
  { src: PHOTOS.tender, alt: "Tender coconut falooda", ratio: "aspect-square" },
  { src: PHOTOS.arabic2, alt: "Arabic falooda served chilled", ratio: "aspect-[4/5]" },
  { src: PHOTOS.kerala2, alt: "Kerala falooda in a tall glass", ratio: "aspect-[3/4]" },
  { src: PHOTOS.mango2, alt: "Mango falooda with ice cream", ratio: "aspect-[4/3]" },
  { src: PHOTOS.mango3, alt: "Mango falooda close up", ratio: "aspect-square" },
  { src: PHOTOS.royalHotgrill, alt: "Royal falooda", ratio: "aspect-[4/5]" },
  { src: PHOTOS.promoKunafa, alt: "Kunafa falooda", ratio: "aspect-square" },
  { src: PHOTOS.promoCoffee, alt: "Coffee falooda", ratio: "aspect-[4/5]" },
  { src: PHOTOS.posterCoffeeFloat, alt: "Coffee float", ratio: "aspect-[3/4]" },
  { src: PHOTOS.posterDarkOreo, alt: "Dark oreo falooda", ratio: "aspect-[4/3]" },
  { src: PHOTOS.posterPassionFruit, alt: "Passion fruit cooler", ratio: "aspect-square" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const next = () => setLightbox((n) => ((n ?? 0) + 1) % IMAGES.length);
  const prev = () => setLightbox((n) => ((n ?? 0) - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  return (
    <div>
      <section className="pt-12 sm:pt-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-medium leading-none text-ink sm:text-7xl"
          >
            Gallery
          </motion.h1>
        </div>
      </section>

      <section className="py-8 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="columns-2 gap-2.5 sm:gap-6 lg:columns-3">
            {IMAGES.map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Open ${img.alt} full screen`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group mb-2.5 block w-full break-inside-avoid text-left sm:mb-6"
              >
                <figure>
                  <div className={`relative overflow-hidden bg-secondary ${img.ratio}`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading={i < 4 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    />
                    <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
                  </div>
                </figure>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-ink/95 p-2 pb-[env(safe-area-inset-bottom)] sm:p-4"
          onClick={() => setLightbox(null)}
          onTouchStart={(e) => {
            touchX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchX.current;
            const end = e.changedTouches[0]?.clientX;
            if (start === null || end === undefined) return;
            const dx = end - start;
            if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
            touchX.current = null;
          }}
        >
          <button
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-ink"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Previous photo"
            className="absolute left-3 z-10 hidden h-12 w-12 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-ink sm:left-6 sm:grid"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next photo"
            className="absolute right-3 z-10 hidden h-12 w-12 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-ink sm:right-6 sm:grid"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <motion.figure
            key={IMAGES[lightbox].src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-[92vw] sm:w-auto"
          >
            <img
              src={IMAGES[lightbox].src}
              alt={IMAGES[lightbox].alt}
              decoding="async"
              className="mx-auto max-h-[82vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-cream/60">
              {IMAGES[lightbox].alt} · {lightbox + 1} / {IMAGES.length}
            </figcaption>
          </motion.figure>
        </div>
      )}
    </div>
  );
}
