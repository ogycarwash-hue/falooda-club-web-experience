import { Heart, MessageCircle, Instagram } from "lucide-react";
import { IG_POSTS, IG_PROFILE } from "@/data/instagram";

export function InstagramGrid() {
  return (
    <div>
      {/* Profile header — mimics Instagram's own layout */}
      <div className="flex flex-col items-start justify-between gap-6 border-b border-hairline pb-8 sm:flex-row sm:items-end">
        <div className="flex items-center gap-5">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-ink text-cream sm:h-20 sm:w-20">
            <Instagram className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
          <div>
            <p className="font-display text-2xl font-medium text-ink sm:text-3xl">
              @{IG_PROFILE.handle}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{IG_PROFILE.bio}</p>
            <div className="mt-2 flex gap-5 text-[13px] text-ink/70">
              <span><b className="text-ink">{IG_PROFILE.followers}</b> followers</span>
              <span><b className="text-ink">{IG_POSTS.length}</b> posts shown</span>
            </div>
          </div>
        </div>
        <a
          href={IG_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ink px-6 text-[13px] font-medium text-cream transition-colors hover:bg-accent-orange"
        >
          <Instagram className="h-4 w-4" />
          Follow on Instagram
        </a>
      </div>

      {/* 3×3 grid — feels like an IG profile page */}
      <div className="mt-6 grid grid-cols-3 gap-1 sm:gap-2">
        {IG_POSTS.map((post, i) => (
          <a
            key={i}
            href={IG_PROFILE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden bg-secondary"
          >
            <img
              src={post.image}
              alt={post.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-between bg-ink/0 p-3 opacity-0 transition-all group-hover:bg-ink/55 group-hover:opacity-100 sm:p-4">
              <div className="flex items-center gap-4 text-cream">
                <span className="flex items-center gap-1 text-[11px] font-medium tabular sm:text-xs">
                  <Heart className="h-3.5 w-3.5 fill-current" /> {post.likes}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-medium tabular sm:text-xs">
                  <MessageCircle className="h-3.5 w-3.5 fill-current" /> {post.comments}
                </span>
              </div>
              <p className="line-clamp-3 hidden text-[11px] leading-snug text-cream sm:block">
                {post.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
