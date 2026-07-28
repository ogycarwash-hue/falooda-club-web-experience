import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";

import heroImg from "@/assets/hero-falooda.jpg";
import spreadImg from "@/assets/gallery-spread.jpg";

import { OrderCta } from "@/components/OrderCta";
import { CategoryTiles } from "@/components/CategoryTiles";
import { ProductRail } from "@/components/ProductRail";
import { StatsBand } from "@/components/StatsBand";
import { InstagramGrid } from "@/components/InstagramGrid";
import { SITE } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falooda Club — Faloodas, Juices & Broasted in Dubai" },
      {
        name: "description",
        content:
          "Falooda Club, Port Saeed Dubai. Faloodas, fresh juices, milkshakes and broasted chicken. Open daily 8 AM – 2 AM. Delivery on Talabat, Noon and Smiles.",
      },
      { property: "og:title", content: "Falooda Club — Port Saeed, Dubai" },
      {
        property: "og:description",
        content: "Faloodas, juices, shakes and broasted meals. Open daily until 2 AM.",
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
          servesCuisine: ["Desserts", "Middle Eastern", "Indian", "Fast Food"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Behind Danata, Near Al Bassam Center, Port Saeed",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          telephone: "+971545686768",
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative h-[88vh] min-h-[540px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Falooda served in a tall glass at Falooda Club Dubai"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/10" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="max-w-3xl font-display font-medium leading-[0.92] tracking-[-0.03em] text-cream"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6.5rem)" }}
          >
            Dubai's <em className="display-italic text-accent-orange">Falooda</em> Club.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            className="mt-6 max-w-md text-[17px] text-cream/80"
          >
            Port Saeed, Dubai. Open daily 8 AM – 2 AM.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <OrderCta size="lg" />
            <Link
              to="/menu"
              className="inline-flex h-14 items-center justify-center gap-1.5 rounded-full border border-cream/35 px-7 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              View Menu
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
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
      <div className="mx-auto mb-8 flex max-w-[1400px] items-end justify-between gap-6 px-5 sm:px-8">
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
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-4 px-5 sm:px-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="overflow-hidden bg-secondary"
        >
          <img
            src={spreadImg}
            alt="Falooda Club drinks and desserts"
            loading="lazy"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </motion.div>

        <div className="flex flex-col justify-center bg-paper px-6 py-12 sm:px-12">
          <h2 className="font-display text-4xl font-medium leading-none text-ink sm:text-5xl">
            Visit us
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink">{SITE.address}</p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
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
        <div className="bg-ink px-6 py-16 text-cream sm:px-16 sm:py-24">
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
                className="inline-flex h-14 items-center justify-center gap-1.5 rounded-full border border-cream/25 px-7 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                {p.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
