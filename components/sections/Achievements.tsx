"use client";

import {
  ArrowUpRight,
  BookOpen,
  Building2,
  FileText,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useContent } from "@/lib/i18n";

const icons: Record<string, LucideIcon> = {
  book: BookOpen,
  building: Building2,
  teaching: GraduationCap,
  journal: FileText,
};

type Achievement = {
  category: string;
  icon: string;
  title: string;
  org: string;
  date: string;
  description: string;
  link?: string;
  linkLabel?: string;
};

const spans = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

export function Achievements() {
  const content = useContent();
  const t = content.achievements;
  const items = t.items as readonly Achievement[];

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative scroll-mt-16 border-t border-slate-900 bg-slate-950 pt-3 pb-8 sm:pt-4 sm:pb-10 md:pt-6 md:pb-12 text-slate-100"
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

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[item.icon] ?? Sparkles;
            const featured = spans[i % spans.length] === "lg:col-span-2";

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950 shadow-[0_80px_160px_-140px_rgba(16,185,129,0.45)] transition-transform duration-500 hover:-translate-y-1 ${
                  spans[i % spans.length]
                } ${featured ? "p-7 sm:p-8" : "p-6"}`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/5 blur-2xl"
                />

                <div
                  className={
                    featured
                      ? "relative grid gap-6 sm:grid-cols-[1fr_1.15fr] sm:items-start"
                      : "relative flex flex-col gap-4"
                  }
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-300 ${
                          featured ? "h-12 w-12" : "h-11 w-11"
                        }`}
                      >
                        <Icon
                          className={featured ? "h-6 w-6" : "h-5 w-5"}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="font-mono2 rounded-full border border-slate-700 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        {item.category}
                      </span>
                    </div>

                    <h3
                      className={`font-display font-semibold leading-snug text-balance text-slate-50 ${
                        featured ? "text-xl sm:text-2xl" : "text-lg"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <div className="flex flex-col gap-1 text-sm">
                      <p className="text-slate-300">
                        <span className="text-slate-500">{t.orgLabel}: </span>
                        {item.org}
                      </p>
                      <p className="font-mono2 text-xs uppercase tracking-[0.12em] text-emerald-300/90">
                        {item.date}
                      </p>
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono2 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-300/40 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-emerald-300 transition-colors hover:bg-emerald-300/10"
                      >
                        {item.linkLabel}
                        <ArrowUpRight
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>

                  <p
                    className={`text-slate-300/90 ${
                      featured
                        ? "text-sm leading-relaxed sm:text-[15px]"
                        : "text-sm leading-relaxed"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
