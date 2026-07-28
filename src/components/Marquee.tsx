import type { ReactNode } from "react";

export function Marquee({
  children,
  speed = "normal",
  className = "",
  separator = "✦",
}: {
  children: ReactNode;
  speed?: "normal" | "slow";
  className?: string;
  separator?: string;
}) {
  const items = Array.isArray(children) ? children : [children];
  const rendered = (
    <>
      {items.map((c, i) => (
        <span key={i} className="flex items-center gap-6 pl-6">
          {c}
          <span aria-hidden className="text-ink/25">{separator}</span>
        </span>
      ))}
    </>
  );

  return (
    <div className={`group flex overflow-hidden ${className}`} aria-hidden={false}>
      <div
        className={`flex shrink-0 ${speed === "slow" ? "animate-marquee-slow" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
      >
        <div className="flex shrink-0 items-center">{rendered}</div>
        <div className="flex shrink-0 items-center" aria-hidden>{rendered}</div>
      </div>
    </div>
  );
}
