import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { CircleScribble } from "@/components/shared/Doodles";

type SectionHeaderProps = {
  slug: string;
  num: string;
  label: string;
  /** Bagian judul normal */
  title: ReactNode;
  /** Kata aksen yang dilingkari coretan (opsional) */
  accent?: ReactNode;
};

// Kepala section gaya referensi: slug mono + nomor + label + judul serif
export function SectionHeader({
  slug,
  num,
  label,
  title,
  accent,
}: SectionHeaderProps) {
  return (
    <div>
      <span
        aria-hidden="true"
        className="font-mono2 text-sm tracking-[0.1em] text-slate-600"
      >
        {slug}
      </span>
      <Reveal className="mt-5">
        <p className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="font-mono2 text-sm font-medium tracking-[0.2em] text-emerald-300"
          >
            {num}
          </span>
          <span className="font-mono2 text-xs font-medium tracking-[0.24em] text-slate-400 uppercase">
            {label}
          </span>
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-slate-50 sm:text-5xl md:text-6xl">
          {title}{" "}
          {accent ? (
            <span className="relative inline-block text-emerald-200 italic">
              {accent}
              <CircleScribble
                className="pointer-events-none absolute top-1/2 left-1/2 h-auto w-[128%] -translate-x-1/2 -translate-y-1/2 text-sky-300/80"
                delay={0.5}
              />
            </span>
          ) : null}
        </h2>
      </Reveal>
    </div>
  );
}
