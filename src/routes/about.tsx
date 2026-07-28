import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { OrderCta } from "@/components/OrderCta";
import { Reveal } from "@/components/Reveal";
import spread from "@/assets/gallery-spread.jpg";
import falooda from "@/assets/hero-falooda.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Falooda Club Dubai" },
      {
        name: "description",
        content:
          "The story of Falooda Club — a Port Saeed dessert café serving Dubai's coldest faloodas, hand-pressed juices and late-night comfort food since 2019.",
      },
      { property: "og:title", content: "About — Falooda Club" },
      {
        property: "og:description",
        content: "How a neighbourhood cafeteria became Dubai's favourite falooda ritual.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2019", event: "Doors open on a quiet Port Saeed corner." },
  { year: "2020", event: "The Pista Falooda finds its recipe. It hasn't changed since." },
  { year: "2022", event: "120+ items on the board. Broasted lands on the menu." },
  { year: "2024", event: "Talabat, Noon and Smiles — Falooda Club is delivered city-wide." },
  { year: "2026", event: "Still hand-pressing fruits. Still open till 2am." },
];

function About() {
  return (
    <div>
      {/* Editorial hero */}
      <section className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-2">
              <span className="font-mono text-[11px] tabular text-ink/40">§ About</span>
            </div>
            <div className="md:col-span-10">
              <h1
                className="font-display font-medium leading-[0.9] tracking-[-0.03em] text-ink text-balance"
                style={{ fontSize: "clamp(2.75rem, 7vw, 6.5rem)" }}
              >
                A little glass. <em className="display-italic text-accent-orange">A lot of joy.</em>
                <br />
                Seven years, one <em className="display-italic">obsession.</em>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="eyebrow">§ 01 · The story</p>
          <Reveal>
            <blockquote className="mt-6 font-display text-3xl font-medium leading-[1.15] text-ink text-balance sm:text-5xl">
              We started as a corner cafeteria with one obsession — the coldest, creamiest,
              most nostalgic <em className="display-italic text-accent-orange">falooda</em> in
              Dubai.
            </blockquote>
          </Reveal>
          <p className="mt-10 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
            Years later, we still hand-press fruits every morning. Still soak basil seeds at
            sunrise. Still churn kulfi in-house. The menu grew — to 120+ items across faloodas,
            juices, shakes, sandwiches and late-night broasted chicken — but the ritual didn't
            change. Neither did the neighbourhood. Port Saeed is home.
          </p>
        </div>
      </section>

      {/* Full-bleed image with caption */}
      <section>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <figure>
              <div className="overflow-hidden bg-secondary">
                <img
                  src={falooda}
                  alt="A strawberry falooda in a tall glass"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline gap-4 text-xs text-ink/60">
                <span className="font-mono tabular text-ink/40">Fig. 02</span>
                <span className="font-display italic">
                  The Strawberry Falooda — served since day one.
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Timeline / spec */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeading
              index="§ 02"
              eyebrow="The timeline"
              title={<>Since <em className="display-italic">2019.</em></>}
            />
          </div>
          <div className="md:col-span-8">
            <dl className="divide-y divide-hairline border-y border-hairline">
              {TIMELINE.map((t) => (
                <div key={t.year} className="grid grid-cols-12 gap-6 py-6 sm:py-7">
                  <dt className="col-span-3 font-mono text-sm tabular text-ink sm:col-span-2 sm:text-base">
                    {t.year}
                  </dt>
                  <dd className="col-span-9 font-display text-lg font-medium text-ink sm:col-span-10 sm:text-2xl">
                    {t.event}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="overflow-hidden bg-secondary">
              <img
                src={spread}
                alt="A colourful spread of Falooda Club drinks"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <span className="font-mono text-[11px] tabular text-ink/40">§ 03 · A note</span>
            <p className="mt-4 font-display text-2xl font-medium leading-[1.25] text-ink text-balance sm:text-4xl">
              <em className="display-italic">"</em>Come as you are. Bring your family, your
              late-shift crew, your sweet tooth. We're open till 2am. Falooda's on us — the smile
              is on you.<em className="display-italic">"</em>
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.24em] text-ink/60">
              — The Falooda Club team
            </p>
            <div className="mt-10">
              <OrderCta size="lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
