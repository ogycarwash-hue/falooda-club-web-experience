import { Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { IG_POSTS, IG_PROFILE } from "@/data/instagram";

export function InstagramGrid() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-hairline pb-6">
        <a
          href={IG_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream transition-colors group-hover:bg-accent-orange">
            <Instagram className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-medium text-ink sm:text-3xl">
            @{IG_PROFILE.handle}
          </span>
        </a>
        <a
          href={IG_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-ink px-6 text-[13px] font-medium text-cream transition-colors hover:bg-accent-orange"
        >
          Follow
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-1 sm:gap-2">
        {IG_POSTS.map((post, i) => (
          <motion.a
            key={i}
            href={post.permalink ?? IG_PROFILE.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative block aspect-square overflow-hidden bg-secondary"
          >
            <img
              src={post.image}
              alt={post.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
            />
            <span className="absolute inset-0 grid place-items-center bg-ink/0 text-cream opacity-0 transition-all duration-500 group-hover:bg-ink/45 group-hover:opacity-100">
              <Instagram className="h-6 w-6" />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
