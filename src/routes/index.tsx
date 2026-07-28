import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

import heroImg from "@/assets/hero-falooda.jpg";
import milkshakeImg from "@/assets/milkshake.jpg";
import lassiImg from "@/assets/lassi.jpg";
import sundaeImg from "@/assets/sundae.jpg";
import fruitSaladImg from "@/assets/fruit-salad.jpg";
import mojitoImg from "@/assets/mojito.jpg";
import burgerImg from "@/assets/burger.jpg";
import juicesImg from "@/assets/juices.jpg";

import { OrderCta } from "@/components/OrderCta";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { InstagramGrid } from "@/components/InstagramGrid";
import { SITE, FAQ, REVIEWS } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falooda Club — Dubai's original dessert café since 2019" },
      {
        name: "description",
        content:
          "Hand-pressed faloodas, fresh juices, crush milkshakes and late-night broasted chicken in Port Saeed, Dubai. Delivery via Talabat, Noon and Smiles.",
      },
      { property: "og:title", content: "Falooda Club — Dubai's original dessert café" },
      {
        property: "og:description",
        content: "Signature faloodas, shakes, mojitos and broasted meals in Port Saeed, Dubai.",
      },
      { property: "og:type", content: "website" },
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
      <MarqueeStrip />
      <FeaturedFaloodas />
      <SignatureZigzag />
      <WhyStrip />
      <BestSellersTicker />
      <ReviewsQuote />
      <InstagramSection />
      <Faq />
      <FinalCta />
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 pt-10 pb-14 sm:px-8 md:grid-cols-12 md:gap-8 md:pt-20 md:pb-24">
        {/* Left column */}
        <div className="relative z-10 md:col-span-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink/30" />
            <p className="eyebrow">Est. 2019 · Port Saeed, Dubai</p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-medium leading-[0.92] tracking-[-0.03em] text-ink text-balance"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
          >
            The coldest{" "}
            <em className="display-italic text-accent-orange">falooda</em>
            <br />
            in Dubai —{" "}
            <em className="display-italic">since</em> 2019.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 max-w-lg text-[17px] leading-relaxed text-muted-foreground"
          >
            Rose syrup, hand-churned kulfi, basil seeds soaked at sunrise. One neighbourhood spot
            in Port Saeed, open every day until 2 in the morning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <OrderCta size="lg" />
            <Link
              to="/menu"
              className="group inline-flex items-center gap-1 text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              Read the menu
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Editorial spec block */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline pt-6"
          >
            {[
              ["01", "Menu items", "120+"],
              ["02", "Talabat rating", "4.8"],
              ["03", "Open daily", "8→2"],
            ].map(([idx, l, v]) => (
              <div key={l}>
                <span className="font-mono text-[10px] tabular text-ink/40">{idx}</span>
                <dt className="mt-1 text-[11px] font-medium uppercase tracking-widest text-ink/60">
                  {l}
                </dt>
                <dd className="mt-1 font-display text-2xl font-medium text-ink tabular">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right image column */}
        <div className="relative md:col-span-5">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-secondary"
          >
            <img
              src={heroImg}
              alt="A tall glass of strawberry falooda with kulfi, rose petals and mint"
              width={900}
              height={1200}
              className="h-[540px] w-full object-cover sm:h-[680px]"
              fetchPriority="high"
            />
          </motion.div>
          {/* Caption card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="absolute -bottom-6 -left-4 max-w-[200px] bg-cream px-4 py-3 sm:-bottom-8 sm:-left-8"
          >
            <p className="font-mono text-[10px] tabular text-ink/50">Fig. 01</p>
            <p className="mt-1 font-display italic text-ink">Strawberry Falooda</p>
            <p className="mt-0.5 text-[11px] text-ink/60 tabular">Rose · Vermicelli · Kulfi — AED 15</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── MARQUEE STRIP ─────────────────────────── */
function MarqueeStrip() {
  return (
    <div className="hairline-t hairline-b bg-cream py-5">
      <Marquee>
        {[
          "Faloodas — AED 15",
          "Hand-pressed juices",
          "Crush milkshakes",
          "Late-night broasted",
          "Open till 2am",
          "Delivery across Dubai",
        ].map((t) => (
          <span key={t} className="font-mono text-xs uppercase tracking-[0.24em] text-ink/70">
            {t}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ─────────────────────────── FEATURED FALOODAS ─────────────────────────── */
const FEATURED = [
  {
    idx: "01",
    name: "Pista",
    latin: "Pista Falooda",
    note: "Rose milk, soaked vermicelli, basil seeds, a generous scoop of pistachio kulfi.",
    price: "15",
  },
  {
    idx: "02",
    name: "Strawberry",
    latin: "Strawberry Falooda",
    note: "Fresh strawberry pulp, rose syrup, vanilla ice cream, a whisper of rose petals.",
    price: "15",
  },
  {
    idx: "03",
    name: "Mango",
    latin: "Mango Falooda",
    note: "Alphonso mango pulp, saffron cream, kulfi and slivered pistachio.",
    price: "15",
  },
];

function FeaturedFaloodas() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          index="§ 01"
          eyebrow="The signatures"
          title={<>Three glasses <em className="display-italic">we're</em> known for.</>}
          description="Made to order. Served tall. Priced at AED 15 — always."
        />

        <div className="mt-16 divide-y divide-hairline border-y border-hairline">
          {FEATURED.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <article className="grid grid-cols-12 items-baseline gap-6 py-8 sm:py-10">
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-mono text-xs tabular text-ink/40">{f.idx}</span>
                </div>
                <div className="col-span-10 sm:col-span-4">
                  <h3 className="font-display text-3xl font-medium leading-none text-ink sm:text-5xl">
                    {f.name}
                    <em className="display-italic text-ink/40"> falooda</em>
                  </h3>
                </div>
                <div className="col-span-12 text-[15px] leading-relaxed text-muted-foreground sm:col-span-5">
                  {f.note}
                </div>
                <div className="col-span-12 flex items-baseline gap-1 sm:col-span-2 sm:justify-end">
                  <span className="font-mono text-[10px] uppercase tabular text-ink/50">AED</span>
                  <span className="font-display text-2xl font-medium tabular text-ink">{f.price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── ZIGZAG SIGNATURES ─────────────────────────── */
const ZIG = [
  {
    idx: "04",
    img: sundaeImg,
    name: "Chocolate Sundae",
    note: "Triple scoop, warm chocolate lava, wafer, glacé cherry. Best shared, better solo.",
    price: "Signature",
  },
  {
    idx: "05",
    img: fruitSaladImg,
    name: "Fruit Salad with Ice Cream",
    note: "Seasonal fruits, vanilla scoop, a slow drizzle of honey. AED 15.",
    price: "AED 15",
  },
  {
    idx: "06",
    img: lassiImg,
    name: "Mango Lassi",
    note: "Thick yogurt, alphonso mango, saffron threads, crushed pistachio. AED 10.",
    price: "AED 10",
  },
];

function SignatureZigzag() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          index="§ 02"
          eyebrow="Beyond the glass"
          title={<>Signature <em className="display-italic">desserts.</em></>}
        />

        <div className="mt-16 space-y-24 sm:space-y-32">
          {ZIG.map((z, i) => (
            <Reveal key={z.name}>
              <div
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-7 md:[direction:ltr]">
                  <div className="overflow-hidden bg-secondary">
                    <img
                      src={z.img}
                      alt={z.name}
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="md:col-span-5 md:[direction:ltr]">
                  <span className="font-mono text-[11px] tabular text-ink/40">{z.idx}</span>
                  <h3 className="mt-2 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
                    {z.name}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {z.note}
                  </p>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-accent-orange">
                    {z.price}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── WHY STRIP (spec table) ─────────────────────────── */
const WHY = [
  { k: "Fresh", v: "Fruits pressed and desserts assembled to order, every single day." },
  { k: "Varied", v: "120+ items — faloodas, juices, shakes, sandwiches, broasted meals." },
  { k: "Fast", v: "Delivery across Dubai on Talabat, Noon and Smiles. Direct in Deira." },
  { k: "Late", v: "Open every day, 8 in the morning until 2 in the morning." },
];

function WhyStrip() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeading
              index="§ 03"
              eyebrow="House rules"
              title={<>Little details you'll <em className="display-italic">taste.</em></>}
            />
          </div>
          <div className="md:col-span-8">
            <dl className="divide-y divide-hairline border-y border-hairline">
              {WHY.map((w, i) => (
                <Reveal key={w.k} delay={i * 0.04}>
                  <div className="grid grid-cols-12 gap-6 py-6 sm:py-8">
                    <dt className="col-span-4 font-display text-xl font-medium text-ink sm:text-2xl">
                      {w.k}
                      <em className="display-italic text-ink/40">.</em>
                    </dt>
                    <dd className="col-span-8 text-[15px] leading-relaxed text-muted-foreground">
                      {w.v}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── BEST SELLERS TICKER ─────────────────────────── */
const BEST = [
  { img: milkshakeImg, name: "Nutella Crush" },
  { img: lassiImg, name: "Mango Lassi" },
  { img: mojitoImg, name: "Watermelon Mojito" },
  { img: burgerImg, name: "Zinker Burger" },
  { img: sundaeImg, name: "Chocolate Sundae" },
  { img: juicesImg, name: "Fresh Juices" },
];

function BestSellersTicker() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="§ 04"
            eyebrow="On repeat"
            title={<>Best sellers, <em className="display-italic">this week.</em></>}
          />
          <Link
            to="/menu"
            className="group inline-flex items-center gap-1 text-sm font-medium text-ink underline-offset-4 hover:underline"
          >
            See the full menu
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="mt-14">
        <Marquee separator="·">
          {BEST.map((b) => (
            <div key={b.name} className="flex items-center gap-4 pr-6">
              <div className="h-20 w-20 shrink-0 overflow-hidden bg-secondary sm:h-28 sm:w-28">
                <img src={b.img} alt={b.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <span className="font-display text-2xl font-medium text-ink sm:text-4xl">
                {b.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

/* ─────────────────────────── REVIEWS — single rotating quote ─────────────────────────── */
function ReviewsQuote() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="eyebrow">§ 05 · Loved by Dubai</p>
        <Reveal>
          <blockquote className="mt-8 font-display text-3xl font-medium leading-[1.15] text-ink text-balance sm:text-5xl">
            <span className="display-italic text-ink/30">"</span>
            {r.text}
            <span className="display-italic text-ink/30">"</span>
          </blockquote>
        </Reveal>
        <figcaption className="mt-10 text-sm">
          <p className="font-medium text-ink">{r.name}</p>
          <p className="mt-0.5 text-muted-foreground">{r.role}</p>
        </figcaption>

        <div className="mt-10 flex items-center justify-center gap-2">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show review ${idx + 1}`}
              className={`h-1 rounded-full transition-all ${
                idx === i ? "w-8 bg-ink" : "w-4 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── INSTAGRAM ─────────────────────────── */
function InstagramSection() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          index="§ 06"
          eyebrow="Latest from the feed"
          title={<>On the <em className="display-italic">'gram.</em></>}
          description="Tag @faloodaclubuae — your reel might land on our feed."
        />
        <div className="mt-14">
          <InstagramGrid />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <SectionHeading
              index="§ 07"
              eyebrow="Good to know"
              title={<>Frequently <em className="display-italic">asked.</em></>}
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="divide-y divide-hairline border-y border-hairline">
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-medium text-ink transition-colors hover:text-accent-orange"
                  >
                    <span className="font-display text-xl sm:text-2xl">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-hairline text-ink" aria-hidden>
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 pr-12 text-[15px] leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FINAL CTA ─────────────────────────── */
function FinalCta() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="bg-ink px-6 py-16 text-cream sm:px-16 sm:py-24">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-cream/60">Order now</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[0.95] text-cream text-balance sm:text-6xl md:text-7xl">
                Order in <em className="display-italic text-accent-orange">minutes.</em>
                <br />
                Smile all <em className="display-italic">evening.</em>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/70">
                Talabat, Noon Food and Smiles deliver Falooda Club across Dubai. Or call — we
                probably know your order.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SITE.order.talabat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-cream px-7 text-sm font-medium text-ink transition-colors hover:bg-accent-orange hover:text-cream"
                >
                  Order online
                </a>
                <a
                  href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex h-14 items-center justify-center rounded-full border border-cream/25 px-7 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
                >
                  Call {SITE.phones[0]}
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <ul className="divide-y divide-cream/15 border-y border-cream/15 text-sm">
                {[
                  ["Talabat", "4.8 ★"],
                  ["Noon Food", "4.7 ★"],
                  ["Smiles", "4.9 ★"],
                ].map(([n, r]) => (
                  <li key={n} className="flex items-center justify-between py-4">
                    <span className="font-display text-xl font-medium text-cream">{n}</span>
                    <span className="font-mono text-xs tabular text-cream/60">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
