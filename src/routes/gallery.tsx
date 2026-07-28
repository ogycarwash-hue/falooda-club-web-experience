import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import hero from "@/assets/hero-falooda.jpg";
import featured from "@/assets/featured-faloodas.jpg";
import spread from "@/assets/gallery-spread.jpg";
import milkshake from "@/assets/milkshake.jpg";
import lassi from "@/assets/lassi.jpg";
import sundae from "@/assets/sundae.jpg";
import fruit from "@/assets/fruit-salad.jpg";
import mojito from "@/assets/mojito.jpg";
import burger from "@/assets/burger.jpg";
import juices from "@/assets/juices.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Falooda Club" },
      {
        name: "description",
        content:
          "Photographs from Falooda Club Dubai — faloodas, shakes, juices and café moments in Port Saeed.",
      },
      { property: "og:title", content: "Gallery — Falooda Club" },
      { property: "og:description", content: "Feast your eyes." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

// Editorial masonry — mix of aspect ratios, no busy spans
const IMAGES = [
  { src: hero, alt: "Strawberry falooda glass", ratio: "aspect-[3/4]", caption: "Strawberry Falooda" },
  { src: featured, alt: "Three faloodas lined up", ratio: "aspect-[4/3]", caption: "The signature trio" },
  { src: milkshake, alt: "Nutella crush milkshake", ratio: "aspect-square", caption: "Nutella Crush" },
  { src: lassi, alt: "Mango lassi", ratio: "aspect-[4/5]", caption: "Mango Lassi" },
  { src: mojito, alt: "Watermelon mojito", ratio: "aspect-[3/4]", caption: "Watermelon Mojito" },
  { src: sundae, alt: "Chocolate sundae", ratio: "aspect-square", caption: "Chocolate Sundae" },
  { src: fruit, alt: "Fruit salad with ice cream", ratio: "aspect-[4/5]", caption: "Fruit Salad · Scoop" },
  { src: burger, alt: "Zinker burger meal", ratio: "aspect-[4/3]", caption: "Zinker Burger" },
  { src: juices, alt: "Fresh juice lineup", ratio: "aspect-[3/4]", caption: "Fresh Juices" },
  { src: spread, alt: "Drinks flatlay", ratio: "aspect-[4/3]", caption: "The Falooda Club spread" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      <section className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            index="§ Gallery"
            eyebrow="Photographs, generously"
            title={<>Textures, colours, <em className="display-italic">tiny moments.</em></>}
            description="A visual index of Falooda Club — hand-composed and photographed in the café."
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
            {IMAGES.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                className="group mb-4 block w-full text-left sm:mb-6"
              >
                <figure className="break-inside-avoid">
                  <div className={`relative overflow-hidden bg-secondary ${img.ratio}`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-[11px]">
                    <span className="font-mono tabular text-ink/40">
                      Fig. {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display italic text-ink/70">{img.caption}</span>
                  </figcaption>
                </figure>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-cream/25 text-cream"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-[90vw]">
            <img
              src={IMAGES[lightbox].src}
              alt={IMAGES[lightbox].alt}
              className="max-h-[85vh] w-auto object-contain"
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-xs text-cream/70">
              <span className="font-mono tabular">
                Fig. {String(lightbox + 1).padStart(2, "0")}
              </span>
              <span className="font-display italic">{IMAGES[lightbox].caption}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
