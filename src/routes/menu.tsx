import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES, MENU } from "@/data/menu";
import { MenuCard } from "@/components/MenuCard";
import { CategoryTiles } from "@/components/CategoryTiles";


export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Falooda Club Dubai" },
      {
        name: "description",
        content:
          "The full Falooda Club menu — faloodas, juices, lassis, milkshakes, mojitos, burgers, shawarma, broasted chicken and more. 120+ items.",
      },
      { property: "og:title", content: "Menu — Falooda Club Dubai" },
      { property: "og:description", content: "120+ items. Search, filter and order online." },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU.filter((m) => {
      if (active !== "All" && m.category !== active) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.arabic?.includes(q) ||
        m.tags?.some((t) => t.includes(q))
      );
    });
  }, [query, active]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof MENU>();
    for (const item of filtered) {
      if (!map.has(item.category)) map.set(item.category, []);
      map.get(item.category)!.push(item);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div className="relative">
      {/* Header */}
      <section className="pt-14 sm:pt-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="font-display text-5xl font-medium leading-none text-ink sm:text-7xl">
            Menu
          </h1>
          <div className="mt-8">
            <CategoryTiles />
          </div>
        </div>
      </section>


      {/* Search + filters */}
      <div className="sticky top-16 z-30 mt-14 border-y border-hairline bg-cream/90 backdrop-blur-md sm:top-20">
        <div className="mx-auto max-w-[1400px] px-5 py-4 sm:px-8">
          <div className="relative flex items-center border-b border-hairline pb-2">
            <Search className="pointer-events-none h-4 w-4 shrink-0 text-ink/50" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search — mango, falooda, لاسي, burger…"
              aria-label="Search the menu"
              className="flex-1 bg-transparent px-3 py-2 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="grid h-7 w-7 place-items-center rounded-full text-ink/60 hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-4 flex gap-1 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {["All", ...CATEGORIES].map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`shrink-0 whitespace-nowrap border-b px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? "border-ink text-ink"
                      : "border-transparent text-ink/50 hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          {grouped.length === 0 && (
            <div className="border border-hairline p-16 text-center">
              <p className="font-display text-2xl italic text-ink">Nothing matches "{query}"</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try another word, or clear the filters.
              </p>
            </div>
          )}

          <div className="space-y-20">
            <AnimatePresence mode="popLayout">
              {grouped.map(([cat, items]) => (
                <motion.section
                  key={cat}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8 flex items-end justify-between gap-4 border-b border-ink pb-3">
                    <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                      {cat}
                    </h2>
                    <span className="font-mono text-[11px] tabular text-ink/50">
                      {String(items.length).padStart(2, "0")} items
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                    {items.map((item) => (
                      <MenuCard key={item.name} item={item} />
                    ))}
                  </div>
                </motion.section>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
