import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import { Marquee } from "./Marquee";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ink text-cream">
      {/* Marquee ribbon */}
      <div className="border-b border-cream/10 py-6">
        <Marquee>
          <span className="font-display text-3xl italic font-medium text-cream/90 sm:text-5xl">
            Sip. Scoop. Smile.
          </span>
          <span className="font-display text-3xl font-medium text-cream/60 sm:text-5xl">
            Rigga
          </span>
          <span className="font-display text-3xl font-medium text-cream/60 sm:text-5xl">
            Abu Hail
          </span>
          <span className="font-display text-3xl font-medium text-cream/60 sm:text-5xl">
            Al Waraqa
          </span>
          <span className="font-display text-3xl italic font-medium text-cream/90 sm:text-5xl">
            Open till 2 AM
          </span>
        </Marquee>

      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <img 
            src="https://falooda-club.com/Falooda%20club.png" 
            alt="Falooda Club" 
            className="h-12 w-auto brightness-110" 
          />
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream/70">
            A Port Saeed dessert café serving the coldest faloodas, hand-pressed juices and
            late-night broasted comfort — every day, until 2 in the morning.
          </p>
          <div className="mt-8 flex gap-3">
            {[
              { href: SITE.social.instagram, icon: Instagram, label: "Instagram" },
              { href: SITE.social.facebook, icon: Facebook, label: "Facebook" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-cream hover:text-cream"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-cream/50">Index</p>
          <ul className="mt-5 space-y-2 font-display text-xl font-medium">
            {[
              ["/menu", "Menu"],
              ["/about", "About"],
              ["/gallery", "Gallery"],
              ["/locations", "Locations"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="inline-flex items-center gap-1 text-cream/85 transition-colors hover:text-accent-orange"
                >
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 space-y-6 text-sm">
          <div>
            <p className="eyebrow text-cream/50">Visit</p>
            <p className="mt-3 leading-relaxed text-cream/80">{SITE.address}</p>
            <p className="mt-2 text-cream/60 tabular">{SITE.hours}</p>
          </div>
          <div>
            <p className="eyebrow text-cream/50">Call</p>
            <ul className="mt-3 space-y-1 tabular">
              {SITE.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="text-cream/85 hover:text-accent-orange">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="tabular">© {year} Falooda Club</p>
          <p className="tabular">Dubai, UAE</p>
        </div>
      </div>

    </footer>
  );
}
