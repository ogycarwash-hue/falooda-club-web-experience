import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PHOTOS } from "@/data/photos";

const TILES = [
  { label: "Faloodas", image: PHOTOS.specialClub, to: "/menu", alt: "Special club falooda in a tall glass" },
  { label: "Ice Cream", image: PHOTOS.iceCream, to: "/menu", alt: "Ice cream sundae bowl at Falooda Club" },
  { label: "Snacks & Fries", image: PHOTOS.loadedFries, to: "/menu", alt: "Loaded fries served at Falooda Club" },
  { label: "Juices & Shakes", image: PHOTOS.mango, to: "/menu", alt: "Mango falooda" },
];

export function CategoryTiles() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
      {TILES.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, y: 28, clipPath: "inset(12% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to={t.to} className="group relative block overflow-hidden bg-secondary">
            <img
              src={t.image}
              alt={t.alt}
              loading="lazy"
              decoding="async"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <span className="font-display text-2xl font-medium text-cream sm:text-3xl">
                {t.label}
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cream/40 text-cream transition-all duration-300 group-hover:bg-cream group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
