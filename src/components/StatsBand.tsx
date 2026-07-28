import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

const STATS = [
  { value: 2019, label: "Serving since", format: (n: number) => String(n) },
  { value: 120, label: "Items on the menu", format: (n: number) => `${n}+` },
  { value: 2, label: "Open till (AM)", format: (n: number) => `${n} AM` },
];

function Counter({
  value,
  format,
  play,
}: {
  value: number;
  format: (n: number) => string;
  play: boolean;
}) {
  const reduced = useReducedMotion();
  const [n, setN] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!play || reduced) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, value, reduced]);

  return <>{format(n)}</>;
}

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-1 divide-y divide-cream/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {STATS.map((s) => (
        <div key={s.label} className="px-6 py-10 text-center sm:py-14">
          <p className="font-display text-5xl font-medium tabular text-cream sm:text-7xl">
            <Counter value={s.value} format={s.format} play={inView} />
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-cream/60">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
