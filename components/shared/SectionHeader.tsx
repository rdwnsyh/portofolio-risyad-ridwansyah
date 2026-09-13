import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
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
  align?: "left" | "center";
  sub?: ReactNode;
};

// Kepala section gaya referensi: slug mono + nomor + label + judul serif
export function SectionHeader({
  slug,
  num,
  label,
  title,
  accent,
  align = "left",
  sub,
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={cn(centered && "text-center")}>
      <span
        aria-hidden="true"
        className="font-mono2 text-sm tracking-[0.1em] text-slate-600"
      >
        {slug}
      </span>
      <Reveal className="mt-5">
        <p
          className={cn(
            "flex items-center gap-4",
            centered && "justify-center",
          )}
        >
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
        <h2
          className={cn(
            "font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-slate-50 sm:text-5xl md:text-6xl",
            centered && "mx-auto",
          )}
        >
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
        {sub ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed text-pretty text-slate-400",
              centered && "mx-auto",
            )}
          >
            {sub}
          </p>
        ) : null}
      </Reveal>
    </div>
  );
}
