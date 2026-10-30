"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useContent } from "@/lib/i18n";
import { ArrowUpRight, X } from "lucide-react";

type CertificateItem = {
  title: string;
  issuer: string;
  date?: string;
  image: string;
  type: "image";
  description?: string;
  competencies?: string[];
};

export function Certificates() {
  const content = useContent();
  const t = content.certificates;
  const items = (t.items as CertificateItem[]) ?? [];

  const [open, setOpen] = useState<CertificateItem | null>(null);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  if (items.length === 0) return null;

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950 shadow-[0_80px_160px_-140px_rgba(16,185,129,0.45)] transition-transform duration-500 hover:-translate-y-1"
            >
              <button
                type="button"
                onClick={() => setOpen(item)}
                className="relative block aspect-[4/3] w-full overflow-hidden"
                aria-label={`${t.view}: ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                  onError={() =>
                    setFailed((prev) => ({ ...prev, [item.image]: true }))
                  }
                />
                {failed[item.image] && (
                  <span className="absolute inset-0 flex items-center justify-center bg-slate-900 px-4 text-center font-mono2 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    {item.title}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              </button>

              <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                <div className="min-w-0">
                  <h3 className="font-display text-base leading-snug font-semibold text-slate-50 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {item.issuer}
                    {item.date && item.date !== "—" ? ` · ${item.date}` : ""}
                  </p>
                </div>
                {item.description && (
                  <p className="text-sm leading-relaxed text-slate-300/90 line-clamp-3 sm:line-clamp-4">
                    {item.description}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setOpen(item)}
                  className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 px-4 py-2.5 text-[11px] font-medium tracking-[0.14em] text-slate-300 uppercase transition-colors hover:border-emerald-300/60 hover:text-emerald-300 sm:tracking-[0.18em] lg:w-auto lg:self-start lg:px-5"
                >
                  {t.view}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-slate-950/90 px-4 py-6 backdrop-blur sm:items-center"
          onClick={() => setOpen(null)}
        >
            <div
              className="relative my-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_140px_220px_-160px_rgba(16,185,129,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-900 px-5 py-3">
                <div>
                  <p
                    id="cert-modal-title"
                    className="font-display text-lg font-semibold text-slate-50"
                  >
                    {open.title}
                  </p>
                  <p className="text-sm text-slate-400">
                    {open.issuer}
                    {open.date && open.date !== "—" ? ` · ${open.date}` : ""}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  aria-label={t.close}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-emerald-300/60 hover:text-emerald-300"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                <div className="relative max-h-[50vh] w-full overflow-auto bg-black/40 lg:max-h-[80vh]">
                  {failed[open.image] ? (
                    <div className="flex min-h-[240px] items-center justify-center px-6 py-16 text-center font-mono2 text-xs uppercase tracking-[0.2em] text-slate-500">
                      {open.title}
                    </div>
                  ) : (
                    <Image
                      src={open.image}
                      alt={open.title}
                      width={1600}
                      height={1200}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="mx-auto h-auto w-full max-w-5xl object-contain"
                      priority={false}
                      onError={() =>
                        setFailed((prev) => ({ ...prev, [open.image]: true }))
                      }
                    />
                  )}
                </div>
                <div className="flex flex-col gap-4 px-5 py-5 lg:max-h-[80vh] lg:overflow-auto lg:pr-6">
                  {(open.description || open.competencies) && (
                    <div>
                      <p className="font-mono2 text-xs uppercase tracking-[0.24em] text-emerald-300">
                        {t.details}
                      </p>
                      {open.description && (
                        <p className="mt-3 text-sm leading-relaxed text-slate-200">
                          {open.description}
                        </p>
                      )}
                    </div>
                  )}
                  {open.competencies && open.competencies.length > 0 && (
                    <div>
                      <p className="font-mono2 text-xs uppercase tracking-[0.24em] text-emerald-300">
                        {t.competencies}
                      </p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {open.competencies.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-2 text-sm text-slate-300"
                          >
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-auto grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        {t.issuer}
                      </p>
                      <p className="mt-1 text-slate-200">{open.issuer}</p>
                    </div>
                    {open.date && open.date !== "—" && (
                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          {t.date}
                        </p>
                        <p className="mt-1 text-slate-200">{open.date}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
        </div>
      )}
    </section>
  );
}
