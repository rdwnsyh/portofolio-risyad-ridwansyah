"use client";

import { heroStats } from "@/data/profile";
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
    <div ref={ref} className="px-6 py-8 text-center sm:py-10">
      <div className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
        {display}
        <span className="text-emerald-300">{suffix}</span>
      </div>
      <div className="font-mono2 mt-3 text-xs tracking-[0.18em] text-slate-400 uppercase">
        {label}
      </div>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section
      aria-label="Statistik utama"
      className="relative border-y border-slate-800/80 bg-slate-900/40"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-slate-800/80 lg:grid-cols-4">
        {heroStats.map((s) => (
          <div key={s.label} className="bg-slate-950">
            <StatCell {...s} />
          </div>
        ))}
      </div>
    </section>
  );
}
