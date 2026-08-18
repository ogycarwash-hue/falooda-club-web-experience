import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import { PHOTOS } from "@/data/photos";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Falooda Club Dubai" },
      {
        name: "description",
        content:
          "Photographs from Falooda Club — faloodas, sundaes, crepes and our Dubai branches in Rigga, Abu Hail and Al Waraqa.",
      },
      { property: "og:title", content: "Gallery — Falooda Club Dubai" },
      {
        property: "og:description",
        content: "Faloodas, sundaes, crepes and our Dubai branches, in photographs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const IMAGES = [
  { src: PHOTOS.specialClub, alt: "Special club falooda", ratio: "aspect-[3/4]" },
  { src: PHOTOS.kulfi, alt: "Kulfi falooda", ratio: "aspect-[4/3]" },
  { src: PHOTOS.nutellaCrepe, alt: "Nutella crepe", ratio: "aspect-square" },
  { src: PHOTOS.mango, alt: "Mango falooda", ratio: "aspect-[4/5]" },
  { src: PHOTOS.storefront1, alt: "Falooda Club storefront", ratio: "aspect-[4/3]" },
  { src: PHOTOS.brownieBowl, alt: "Brownie bowl", ratio: "aspect-square" },
  { src: PHOTOS.arabic, alt: "Arabic falooda", ratio: "aspect-[3/4]" },
  { src: PHOTOS.oreoBowl, alt: "Oreo bowl", ratio: "aspect-[4/5]" },
  { src: PHOTOS.storefront3, alt: "Falooda Club counter", ratio: "aspect-[4/3]" },
  { src: PHOTOS.blackberry, alt: "Blackberry falooda", ratio: "aspect-[3/4]" },
  { src: PHOTOS.strawberrySundae, alt: "Strawberry sundae", ratio: "aspect-square" },
  { src: PHOTOS.avocado, alt: "Avocado falooda", ratio: "aspect-[4/5]" },
  { src: PHOTOS.mangoJuice, alt: "Fresh mango juice", ratio: "aspect-[3/4]" },
  { src: PHOTOS.opening, alt: "Falooda Club branch opening", ratio: "aspect-[4/3]" },
  { src: PHOTOS.caramelCup, alt: "Caramel cup dessert", ratio: "aspect-square" },
  { src: PHOTOS.kerala, alt: "Kerala falooda", ratio: "aspect-[4/5]" },
  { src: PHOTOS.tender, alt: "Tender coconut falooda", ratio: "aspect-[3/4]" },
  { src: PHOTOS.storefront5, alt: "Falooda Club shopfront at night", ratio: "aspect-[4/3]" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((n) => ((n ?? 0) + 1) % IMAGES.length);
      if (e.key === "ArrowLeft")
        setLightbox((n) => ((n ?? 0) - 1 + IMAGES.length) % IMAGES.length);
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
      <section className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="font-display text-5xl font-medium leading-none text-ink sm:text-7xl">
            Gallery
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
            {IMAGES.map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group mb-4 block w-full text-left sm:mb-6"
              >
                <figure className="break-inside-avoid">
                  <div className={`relative overflow-hidden bg-secondary ${img.ratio}`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
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
          className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-ink/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-ink"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Previous photo"
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-ink sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((n) => ((n ?? 0) - 1 + IMAGES.length) % IMAGES.length);
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next photo"
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-ink sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((n) => ((n ?? 0) + 1) % IMAGES.length);
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-[90vw]">
            <img
              key={IMAGES[lightbox].src}
              src={IMAGES[lightbox].src}
              alt={IMAGES[lightbox].alt}
              decoding="async"
              className="max-h-[85vh] w-auto animate-fade-in object-contain"
            />
            <figcaption className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-cream/60">
              {lightbox + 1} / {IMAGES.length}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
