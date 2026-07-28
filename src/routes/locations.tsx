import { createFileRoute } from "@tanstack/react-router";
import { Navigation, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { OrderCta } from "@/components/OrderCta";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Falooda Club Dubai" },
      {
        name: "description",
        content:
          "Find Falooda Club across Dubai with branches in Rigga, Abu Hail, and Al Waraqa. Open every day, 8am until 2am.",
      },
      { property: "og:title", content: "Locations — Falooda Club" },
      { property: "og:description", content: "Branches in Rigga, Abu Hail, and Al Waraqa — Dubai." },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          SITE.locations?.map((loc) => ({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: `Falooda Club - ${loc.branch}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: loc.address,
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
            telephone: SITE.phones[0],
            openingHours: "Mo-Su 08:00-02:00",
          })) || []
        ),
      },
    ],
  }),
  component: Locations,
});

const HOURS = [
  ["Monday", "8:00 — 02:00"],
  ["Tuesday", "8:00 — 02:00"],
  ["Wednesday", "8:00 — 02:00"],
  ["Thursday", "8:00 — 02:00"],
  ["Friday", "8:00 — 02:00"],
  ["Saturday", "8:00 — 02:00"],
  ["Sunday", "8:00 — 02:00"],
] as const;

function Locations() {
  const locations = SITE.locations || [];

  return (
    <div>
      <section className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            index="§ Locations"
            eyebrow="Our branches"
            title={<>Find us across <em className="display-italic">Dubai.</em></>}
            description="Your neighbourhood spots in Rigga, Abu Hail, and Al Waraqa. Delivery across Dubai via Talabat, Noon and Smiles."
          />
        </div>
      </section>

      <div className="flex flex-col">
        {locations.map((loc, i) => (
          <section key={loc.branch} className="border-b border-hairline py-16 last:border-0 sm:py-24">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-12 md:gap-16">
              {/* Left: details */}
              <div className="md:col-span-5">
                <p className="font-mono text-[11px] tabular text-ink/40">
                  0{i + 1} · Branch
                </p>
                <h2 className="mt-3 font-display text-4xl font-medium leading-[1] text-ink sm:text-5xl">
                  {loc.branch} <em className="display-italic text-accent-orange">Cafeteria</em>
                </h2>

                <dl className="mt-10 divide-y divide-hairline border-y border-hairline">
                  <div className="grid grid-cols-12 gap-4 py-5">
                    <dt className="col-span-4 eyebrow">Address</dt>
                    <dd className="col-span-8 text-[15px] leading-relaxed text-ink">{loc.address}</dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 py-5">
                    <dt className="col-span-4 eyebrow">Phone</dt>
                    <dd className="col-span-8 text-[15px] tabular text-ink">
                      {SITE.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-accent-orange">
                          {p}
                        </a>
                      ))}
                    </dd>
                  </div>
                </dl>

                {/* Hours as spec table */}
                <div className="mt-12">
                  <p className="eyebrow">Opening hours</p>
                  <table className="mt-4 w-full tabular text-sm">
                    <tbody className="divide-y divide-hairline border-y border-hairline">
                      {HOURS.map(([day, time]) => (
                        <tr key={day}>
                          <td className="py-3 text-ink">{day}</td>
                          <td className="py-3 text-right font-mono text-ink/70">{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <OrderCta size="lg" />
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      "Falooda Club " + loc.branch + " Dubai"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center gap-2 rounded-full border border-hairline px-6 text-sm font-medium text-ink transition-colors hover:border-ink"
                  >
                    <Navigation className="h-4 w-4" /> Get directions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right: map, bleeds full-bleed on desktop */}
              <div className="md:col-span-7">
                <div className="overflow-hidden bg-secondary">
                  <iframe
                    src={loc.mapEmbed}
                    title={`Map to Falooda Club, ${loc.branch}, Dubai`}
                    loading="lazy"
                    className="h-[420px] w-full border-0 md:h-[720px]"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
