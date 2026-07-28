import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import featured from "@/assets/featured-faloodas.jpg";
import juices from "@/assets/juices.jpg";
import burger from "@/assets/burger.jpg";

const TILES = [
  { label: "Faloodas", image: featured, to: "/menu", alt: "Falooda glasses" },
  { label: "Juices & Shakes", image: juices, to: "/menu", alt: "Fresh juices" },
  { label: "Broasted & Meals", image: burger, to: "/menu", alt: "Burger meal" },
];

export function CategoryTiles() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      {TILES.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to={t.to}
            className="group relative block overflow-hidden bg-secondary"
          >
            <img
              src={t.image}
              alt={t.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <span className="font-display text-2xl font-medium text-cream sm:text-3xl">
                {t.label}
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cream/40 text-cream transition-colors group-hover:bg-cream group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
