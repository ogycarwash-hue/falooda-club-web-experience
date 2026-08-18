import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";

import { OrderCta } from "@/components/OrderCta";
import { CategoryTiles } from "@/components/CategoryTiles";
import { ProductRail } from "@/components/ProductRail";
import { StatsBand } from "@/components/StatsBand";
import { InstagramGrid } from "@/components/InstagramGrid";
import { PHOTOS } from "@/data/photos";
import { SITE } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falooda Club — Faloodas, Sundaes & Juices in Dubai" },
      {
        name: "description",
        content:
          "Falooda Club Dubai. Faloodas, sundaes, crepes and fresh juices in Rigga, Abu Hail and Al Waraqa. Open daily 8 AM – 2 AM. Delivery on Talabat, Noon and Smiles.",
      },
      { property: "og:title", content: "Falooda Club — Faloodas, Sundaes & Juices in Dubai" },
      {
        property: "og:description",
        content:
          "Faloodas, sundaes and fresh juices across three Dubai branches. Open daily 8 AM – 2 AM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Falooda Club",
          servesCuisine: ["Desserts", "Middle Eastern", "Indian"],
          address: SITE.locations.map((l) => ({
            "@type": "PostalAddress",
            streetAddress: l.address,
            addressLocality: "Dubai",
            addressCountry: "AE",
          })),
          telephone: "+971545686768",
          openingHours: "Mo-Su 08:00-02:00",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Signatures />
      <Stats />
      <Social />
      <Visit />
      <FinalCta />
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <motion.div style={reduced ? undefined : { y, scale }} className="absolute inset-0">
        <img
          src={PHOTOS.specialClub2}
          alt="Falooda served in a tall glass at Falooda Club Dubai"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/60 to-ink/15" />
      <div aria-hidden className="grain absolute inset-0" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-cream/60"
          >
            Rigga · Abu Hail · Al Waraqa
          </motion.p>

          <h1
            className="max-w-3xl font-display font-medium leading-[0.92] tracking-[-0.03em] text-cream"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6.5rem)" }}
          >
            {["Dubai's", "Falooda", "Club."].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: i * 0.09, ease: EASE }}
                  className={`inline-block pr-[0.22em] ${
                    i === 1 ? "display-italic text-accent-orange" : ""
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: EASE }}
            className="mt-6 max-w-md text-[17px] text-cream/80"
          >
            Open daily, 8 AM – 2 AM.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <OrderCta size="lg" tone="light" />
            <Link
              to="/menu"
              className="group inline-flex h-14 items-center justify-center gap-1.5 rounded-full border border-cream/35 px-7 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              View Menu
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <span className="h-10 w-px animate-scroll-hint bg-cream/50" />
      </motion.div>
    </section>
  );
}

/* ─────────────────────────── CATEGORIES ─────────────────────────── */
function Categories() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <CategoryTiles />
      </div>
    </section>
  );
}

/* ─────────────────────────── SIGNATURES RAIL ─────────────────────────── */
function Signatures() {
  return (
    <section className="overflow-hidden pb-16 sm:pb-24">
      <div className="mx-auto mb-8 grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-end gap-6 px-5 sm:px-8">
        <h2 className="font-display text-4xl font-medium leading-none text-ink sm:text-6xl">
          Signatures
        </h2>
        <Link
          to="/menu"
          className="group inline-flex shrink-0 items-center gap-1 text-sm font-medium text-ink underline-offset-4 hover:underline"
        >
          Full menu
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
      <ProductRail />
    </section>
  );
}

/* ─────────────────────────── STATS ─────────────────────────── */
function Stats() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <StatsBand />
      </div>
    </section>
  );
}

/* ─────────────────────────── INSTAGRAM ─────────────────────────── */
function Social() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <InstagramGrid />
      </div>
    </section>
  );
}

/* ─────────────────────────── VISIT ─────────────────────────── */
function Visit() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0% 0% 14% 0%)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="group overflow-hidden bg-secondary"
          >
            <img
              src={PHOTOS.storefront2}
              alt="Falooda Club storefront in Dubai"
              loading="lazy"
              className="h-full min-h-[340px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
            />
          </motion.div>

          <div className="flex flex-col justify-center bg-paper px-6 py-12 sm:px-12">
            <h2 className="font-display text-4xl font-medium leading-none text-ink sm:text-5xl">
              Three branches
            </h2>
            <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
              {SITE.locations.map((loc, i) => (
                <motion.li
                  key={loc.branch}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="font-display text-xl font-medium text-ink">{loc.branch}</span>
                  <span className="font-mono text-[11px] tabular text-ink/50">
                    0{i + 1}
                  </span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
              {SITE.hours}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/locations"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-cream transition-colors hover:bg-accent-orange"
              >
                <MapPin className="h-4 w-4" />
                Get directions
              </Link>
              {SITE.phones[0] && (
                <a
                  href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-hairline px-6 text-sm font-medium tabular text-ink transition-colors hover:bg-secondary"
                >
                  {SITE.phones[0]}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FINAL CTA ─────────────────────────── */
function FinalCta() {
  const partners = [
    { label: "Talabat", href: SITE.order.talabat },
    { label: "Noon Food", href: SITE.order.noon },
    { label: "Smiles", href: SITE.order.smiles },
  ];

  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="relative overflow-hidden bg-ink px-6 py-16 text-cream sm:px-16 sm:py-24">
          <img
            src={PHOTOS.promoKunafa}
            alt=""
            aria-hidden
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="relative">
            <h2
              className="font-display font-medium leading-[0.9] text-cream"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Order <em className="display-italic text-accent-orange">now.</em>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {partners.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center justify-center gap-1.5 rounded-full border border-cream/25 px-7 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
                >
                  {p.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
