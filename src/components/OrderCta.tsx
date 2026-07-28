import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

export function OrderCta({
  size = "md",
  tone = "dark",
}: {
  size?: "sm" | "md" | "lg";
  tone?: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const sizes = {
    sm: "h-10 px-4 text-[13px]",
    md: "h-12 px-5 text-sm",
    lg: "h-14 px-7 text-[15px]",
  } as const;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`inline-flex ${sizes[size]} items-center justify-center gap-2 rounded-full font-medium transition-colors ${tone === "light" ? "bg-cream text-ink hover:bg-accent-orange hover:text-cream" : "bg-ink text-cream hover:bg-accent-orange"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream`}
      >
        Order online
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-lg border border-hairline bg-paper shadow-[0_20px_50px_-20px_rgba(26,22,19,0.25)]"
        >
          {[
            { href: SITE.order.talabat, label: "Talabat", note: "Widest coverage" },
            { href: SITE.order.noon, label: "Noon Food", note: "Fast delivery" },
            { href: SITE.order.smiles, label: "Smiles", note: "Etisalat rewards" },
          ].map((o) => (
            <a
              key={o.label}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 border-b border-hairline px-4 py-3 text-sm transition-colors last:border-0 hover:bg-secondary"
              role="menuitem"
            >
              <span>
                <span className="block font-medium text-ink">{o.label}</span>
                <span className="mt-0.5 block text-[11px] text-muted-foreground">{o.note}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-ink/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-orange" />
            </a>
          ))}
          <a
            href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
            className="flex items-center justify-between px-4 py-3 text-sm font-medium text-accent-orange hover:bg-secondary"
            role="menuitem"
          >
            Call {SITE.phones[0]}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}
