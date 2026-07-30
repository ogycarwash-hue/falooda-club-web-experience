import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { OrderCta } from "./OrderCta";


const NAV = [
  { to: "/menu", label: "Menu", index: "01" },
  { to: "/about", label: "About", index: "02" },
  { to: "/gallery", label: "Gallery", index: "03" },
  { to: "/locations", label: "Locations", index: "04" },
  { to: "/contact", label: "Contact", index: "05" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.3 });



  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        open
          ? "bg-cream" // Removes blur and containing block issue when menu is open
          : scrolled
          ? "bg-cream/85 backdrop-blur-md hairline-b"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:h-20 sm:px-8"
      >
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Falooda Club home">
          <img
            src="https://falooda-club.com/Falooda%20club.png"
            alt="Falooda Club"
            width={140}
            height={90}
            className="h-9 w-auto sm:h-11"
          />
          <span className="hidden font-display text-[11px] uppercase leading-tight tracking-[0.22em] text-ink/60 sm:block">
            Est. 2019 <br /> Dubai
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: false }}
                className="group relative inline-flex items-baseline gap-1.5 py-2 text-sm font-medium text-ink/75 transition-colors hover:text-ink [&.active]:text-ink"
              >
                <span className="font-mono text-[10px] tabular text-ink/40 group-hover:text-accent-orange">
                  {item.index}
                </span>
                <span>{item.label}</span>
                <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full group-[.active]:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <OrderCta size="sm" />
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-cream md:hidden">
          <div className="mx-auto max-w-[1400px] px-5 py-10">
            <p className="eyebrow">Index</p>
            <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: false }}
                    className="flex items-baseline gap-4 py-5 font-display text-4xl font-medium text-ink [&.active]:italic [&.active]:text-accent-orange"
                  >
                    <span className="font-mono text-xs tabular text-ink/40">{item.index}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <OrderCta size="lg" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
