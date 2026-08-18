import { useEffect, useRef, useState } from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { IG_POSTS, IG_PROFILE } from "@/data/instagram";

declare global {
  interface Window {
    instgrm?: { Embeds: { processEmbeds: () => void } };
  }
}

const SCRIPT_ID = "instagram-embed-script";
const SCRIPT_SRC = "https://www.instagram.com/embed.js";

const INITIAL_VISIBLE = 6;

export function InstagramGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  // Newly revealed blockquotes need another pass from embed.js.
  useEffect(() => {
    if (visible === INITIAL_VISIBLE) return;
    const t = setTimeout(() => window.instgrm?.Embeds?.processEmbeds?.(), 60);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    let cancelled = false;

    const process = () => {
      if (cancelled) return;
      const fn = window.instgrm?.Embeds?.processEmbeds;
      if (typeof fn === "function") fn();
    };


    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (window.instgrm) {
      // Script already loaded — re-scan the freshly mounted blockquotes.
      const t = setTimeout(process, 60);
      return () => {
        cancelled = true;
        clearTimeout(t);
      };
    }

    const script = existing ?? document.createElement("script");
    if (!existing) {
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", process);

    // Safety net: embed.js sometimes fires before the nodes are attached.
    const retry = setInterval(process, 500);
    const stop = setTimeout(() => clearInterval(retry), 5000);

    return () => {
      cancelled = true;
      script.removeEventListener("load", process);
      clearInterval(retry);
      clearTimeout(stop);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-hairline pb-6 sm:flex sm:flex-wrap sm:justify-between">
        <a
          href={IG_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-w-0 items-center gap-4"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-cream transition-colors group-hover:bg-accent-orange">
            <Instagram className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-2xl font-medium text-ink sm:text-3xl">
            @{IG_PROFILE.handle}
          </span>
        </a>
        <a
          href={IG_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-ink px-6 text-[13px] font-medium text-cream transition-colors hover:bg-accent-orange"
        >
          Follow
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div
        ref={containerRef}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {IG_POSTS.map((post, i) => (
          <motion.div
            key={post.permalink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink={`${post.permalink}?utm_source=ig_embed&am;utm_campaign=loading`}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: 0,
                boxShadow: "none",
                margin: 0,
                maxWidth: "540px",
                minWidth: "0",
                padding: 0,
                width: "100%",
              }}
            >
              <div className="aspect-square w-full animate-pulse bg-secondary" />
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-center text-xs text-ink/50 hover:text-ink"
              >
                View on Instagram
              </a>
            </blockquote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
