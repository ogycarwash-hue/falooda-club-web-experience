import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { OrderCta } from "@/components/OrderCta";
import spread from "@/assets/gallery-spread.jpg";
import falooda from "@/assets/hero-falooda.jpg";
import featured from "@/assets/featured-faloodas.jpg";
import juices from "@/assets/juices.jpg";
import sundae from "@/assets/sundae.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Falooda Club Dubai" },
      {
        name: "description",
        content:
          "Falooda Club is a dessert café in Port Saeed, Dubai, serving faloodas, fresh juices, milkshakes and broasted meals since 2019.",
      },
      { property: "og:title", content: "About — Falooda Club" },
      {
        property: "og:description",
        content: "A dessert café in Port Saeed, Dubai. Open daily 8 AM – 2 AM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const GRID = [
  { src: featured, alt: "Falooda line-up", span: "sm:col-span-2 aspect-[16/10]" },
  { src: juices, alt: "Fresh juices", span: "aspect-[4/5]" },
  { src: sundae, alt: "Chocolate sundae", span: "aspect-[4/5]" },
  { src: spread, alt: "Drinks and desserts spread", span: "sm:col-span-2 aspect-[16/10]" },
];

function About() {
  return (
    <div>
      {/* Full-bleed opener */}
      <section className="relative h-[60vh] min-h-[380px] overflow-hidden">
        <img
          src={falooda}
          alt="Falooda in a tall glass"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-ink/20" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 sm:pb-16">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-display font-medium leading-[0.9] tracking-[-0.03em] text-cream"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)" }}
            >
              Since <em className="display-italic text-accent-orange">2019.</em>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Short statement */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="font-display text-2xl font-medium leading-[1.3] text-ink text-balance sm:text-4xl">
            Falooda Club is a dessert café in Port Saeed, Dubai. Faloodas, fresh juices,
            milkshakes and broasted meals — served every day until 2 AM.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 px-5 sm:grid-cols-2 sm:gap-4 sm:px-8">
          {GRID.map((g, i) => (
            <motion.div
              key={g.alt}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: EASE }}
              className={`group overflow-hidden bg-secondary ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <OrderCta size="lg" />
        </div>
      </section>
    </div>
  );
}
