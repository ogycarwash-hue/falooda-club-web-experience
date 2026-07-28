import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  children,
}: {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      {(eyebrow || index) && (
        <div className="flex items-baseline gap-3">
          {index && (
            <span className="font-mono text-[11px] tabular text-ink/50">{index}</span>
          )}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </div>
      )}
      <h2 className="font-display text-[2.75rem] font-medium leading-[0.98] tracking-[-0.02em] text-ink text-balance sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
