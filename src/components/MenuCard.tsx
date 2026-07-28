import type { MenuItem } from "@/data/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex items-baseline gap-3 border-b border-hairline py-5 transition-colors hover:text-accent-orange">
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h3 className="font-display text-lg font-medium text-ink transition-colors group-hover:text-accent-orange">
            {item.name}
          </h3>
          {item.tags?.includes("signature") && (
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent-orange">
              signature
            </span>
          )}
          {item.tags?.includes("bestseller") && (
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50">
              best seller
            </span>
          )}
        </div>
        {item.arabic && (
          <p className="mt-0.5 text-[13px] text-ink/50" dir="rtl">
            {item.arabic}
          </p>
        )}
      </div>

      <div className="flex-1 dot-leader h-3" aria-hidden />
      <div className="shrink-0 text-right font-mono text-sm tabular text-ink">
        {item.price ? (
          <>
            <span className="text-[10px] uppercase text-ink/50">AED </span>
            <span className="font-medium">{item.price}</span>
          </>
        ) : (
          <span className="text-[10px] uppercase text-ink/40">market</span>
        )}
      </div>
    </article>
  );
}
