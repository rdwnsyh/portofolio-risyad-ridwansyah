"use client";

import {
  Code2,
  Database,
  FolderOpen,
  Layers,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { useContent } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/button";
import { Magnet } from "@/components/shared/Magnet";
import { Marquee } from "@/components/shared/Marquee";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

const categoryIcons = {
  code: Code2,
  layers: Layers,
  database: Database,
  shield: ShieldCheck,
} as const;

export function Skills() {
  const { skills: t, shared } = useContent();

  const marqueeItems = t.categories.flatMap((c) =>
    c.items.map((s) => s.name),
  );

  return (
    <section
      id="skills"
      aria-label={`${t.title} ${t.accent}`}
      className="relative scroll-mt-20 border-t border-slate-900 bg-slate-950 py-24 text-slate-100 sm:py-28"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          slug={t.slug}
          num={t.num}
          label={t.label}
          title={t.title}
          accent={t.accent}
          align="center"
          sub={t.tagline}
        />
      </div>

      <Reveal className="mt-12">
        <Marquee items={marqueeItems} duration={52} reverse />
      </Reveal>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {t.categories.map((cat, i) => {
            const Icon = categoryIcons[cat.icon as keyof typeof categoryIcons];
            return (
              <Reveal
                key={cat.key}
                as="article"
                variant="scale"
                delay={i * 120}
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-xl hover:shadow-black/50 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                      <Icon
                        className="h-[22px] w-[22px] text-emerald-300"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-slate-50">
                      {cat.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="font-mono2 ml-auto text-sm text-slate-500"
                    >
                      ({String(cat.items.length).padStart(2, "0")})
                    </span>
                  </div>
                  <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
                    {cat.items.map((s) => (
                      <li
                        key={s.name}
                        title={s.name}
                        className="group flex items-center gap-2.5 rounded-xl border border-slate-800/80 bg-slate-950/60 px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800/60"
                      >
                        <span
                          aria-hidden="true"
                          className="font-mono2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80 text-[11px] font-bold tracking-wide text-emerald-300 transition-colors group-hover:border-emerald-300/40"
                        >
                          {s.abbr}
                        </span>
                        <span className="truncate text-[13px] font-medium text-slate-200">
                          {s.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Navigasi antar halaman */}
        <Reveal className="mt-20 flex flex-wrap justify-center gap-3.5">
          <Magnet>
            <ButtonLink href={`mailto:${shared.email}`} size="lg">
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
              <span>{t.pageContact}</span>
            </ButtonLink>
          </Magnet>
          <Magnet>
            <ButtonLink href="#projects" variant="secondary" size="lg">
              <FolderOpen className="h-[18px] w-[18px]" aria-hidden="true" />
              <span>{t.pageProjects}</span>
            </ButtonLink>
          </Magnet>
        </Reveal>
      </div>
    </section>
  );
}
