"use client";

import { useContent } from "@/lib/i18n";
import { useCountUp } from "@/hooks/useCountUp";

function StatCell({
  value,
  suffix,
  decimals,
  label,
}: {
  value: number;
  suffix: string;
  decimals: number;
  label: string;
}) {
  const [display, ref] = useCountUp<HTMLDivElement>(value, decimals);
  return (
    <div ref={ref} className="px-3 py-6 text-center sm:px-6 sm:py-9">
      <div className="font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
        {display}
        <span className="text-emerald-300">{suffix}</span>
      </div>
      <div className="font-mono2 mt-2 sm:mt-3 text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] text-slate-400 uppercase">
        {label}
      </div>
    </div>
  );
}

export function StatsStrip() {
  const { stats } = useContent();

  return (
    <section
      aria-label={stats.sectionAria}
      className="relative border-y border-slate-800/80 bg-slate-900/40"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-slate-800/80 sm:grid-cols-2 lg:grid-cols-4">
        {stats.items.map((s) => (
          <div key={s.label} className="bg-slate-950">
            <StatCell {...s} />
          </div>
        ))}
      </div>
    </section>
  );
}
