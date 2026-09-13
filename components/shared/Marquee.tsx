import { Fragment } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: readonly string[];
  separator?: string;
  duration?: number;
  className?: string;
};

// Ticker tanpa henti: item genap serif italic, ganjil mono (seperti set type)
export function Marquee({
  items,
  separator = "✳",
  duration = 36,
  className,
}: MarqueeProps) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <Fragment key={`${item}-${i}`}>
          <span
            className={cn(
              "mx-6 text-lg whitespace-nowrap md:text-xl",
              i % 2 === 0
                ? "font-display text-slate-100 italic"
                : "font-mono2 text-[13px] tracking-[0.18em] text-slate-400 uppercase",
            )}
          >
            {item}
          </span>
          <span aria-hidden="true" className="text-sm text-emerald-300/80">
            {separator}
          </span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className={cn("marquee", className)}>
      <div
        className="marquee__track items-center py-4"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
