import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { OrderCta } from "@/components/OrderCta";
import { BRANCH_PHOTOS, PHOTOS } from "@/data/photos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Falooda Club Dubai" },
      {
        name: "description",
        content:
          "Falooda Club is a Dubai dessert café serving faloodas, sundaes, crepes and fresh juices since 2019. Three branches: Rigga, Abu Hail and Al Waraqa.",
      },
      { property: "og:title", content: "About — Falooda Club Dubai" },
      {
        property: "og:description",
        content: "Faloodas, sundaes and fresh juices in Dubai since 2019. Open daily 8 AM – 2 AM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const EASE = [0.22, 1, 0.36, 1] as const;

/** Lead storefront shot, then every other branch/opening photo in the masonry. */
const [LEAD, ...REST] = BRANCH_PHOTOS;

function About() {
  return (
    <div>
      <section className="relative h-[62vh] min-h-[380px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          src={PHOTOS.specialClub}
          alt="Falooda Club special club falooda"
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

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="font-display text-2xl font-medium leading-[1.3] text-ink text-balance sm:text-4xl">
            Falooda Club is a dessert café in Dubai. Faloodas, sundaes, crepes and fresh juices —
            served every day until 2 AM across Rigga, Abu Hail and Al Waraqa.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-hairline pb-4">
            <h2 className="font-display text-3xl font-medium leading-none text-ink sm:text-5xl">
              Our branches
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
              Rigga · Abu Hail · Al Waraqa
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, clipPath: "inset(14% 0% 0% 0%)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="group mb-3 overflow-hidden bg-secondary sm:mb-4"
          >
            <img
              src={LEAD.src}
              alt={LEAD.alt}
              className="aspect-[16/9] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
            />
          </motion.div>

          <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
            {REST.map((g, i) => (
              <motion.figure
                key={g.src}
                initial={{ opacity: 0, y: 22, clipPath: "inset(14% 0% 0% 0%)" }}
                whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.07, ease: EASE }}
                className="group mb-3 break-inside-avoid overflow-hidden bg-secondary sm:mb-4"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <OrderCta size="lg" />
        </div>
      </section>
    </div>
  );
}
