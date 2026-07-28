import type { MenuItem } from "@/data/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex items-baseline gap-4 border-b border-hairline py-5 transition-colors hover:text-accent-orange">
      <div className="min-w-0 shrink-0 max-w-[60%]">
        <h3 className="truncate font-display text-lg font-medium text-ink transition-colors group-hover:text-accent-orange">
          {item.name}
          {item.tags?.includes("signature") && (
            <span className="ml-2 align-middle font-mono text-[9px] uppercase tracking-[0.2em] text-accent-orange">
              signature
            </span>
          )}
        </h3>
        {item.arabic && (
          <p className="mt-0.5 truncate text-[13px] text-ink/50" dir="rtl">
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
