"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Clapperboard,
  ExternalLink,
  Landmark,
  Layers,
  LayoutDashboard,
  Mail,
  Smartphone,
  Trophy,
  Truck,
  X,
} from "lucide-react";
import { projects, type ProjectItem } from "@/data/projects";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Magnet } from "@/components/shared/Magnet";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";

const iconMap = {
  dashboard: LayoutDashboard,
  landmark: Landmark,
  smartphone: Smartphone,
  trophy: Trophy,
  truck: Truck,
  clapper: Clapperboard,
} as const;

function ProjectVisual({ item, large }: { item: ProjectItem; large?: boolean }) {
  const Icon = iconMap[item.icon];
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative m-3.5 mb-0 overflow-hidden rounded-xl border border-slate-800 bg-[radial-gradient(ellipse_80%_90%_at_50%_0%,rgba(52,211,153,0.14),transparent),linear-gradient(to_bottom,#0f172a,#020617)]",
        large ? "aspect-[2/1] max-md:aspect-video" : "aspect-video",
      )}
    >
      {/* Bilah browser */}
      <div className="flex items-center gap-1.5 border-b border-slate-800/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="font-mono2 ml-3 truncate text-[11px] tracking-wider text-slate-500">
          github.com/rdwnsyh/{item.github.split("/").pop()}
        </span>
      </div>
      <div className="absolute inset-0 top-[41px] bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
      <div className="absolute inset-0 top-[41px] flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 shadow-xl shadow-black/40 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
          <Icon className="h-7 w-7 text-emerald-300" />
        </span>
      </div>
    </div>
  );
}

function ProjectModal({
  item,
  index,
  onClose,
}: {
  item: ProjectItem;
  index: number;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Detail proyek ${item.title}`}
    >
      <button
        type="button"
        aria-label="Tutup detail proyek"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
      />
      <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/60">
        <ProjectVisual item={item} />
        <div className="p-6 sm:p-8">
          <p className="flex items-center justify-between gap-4">
            <span aria-hidden="true" className="font-mono2 text-xs text-slate-500">
              {`№${String(index + 1).padStart(2, "0")}`}
            </span>
            <span className="font-display text-sm text-emerald-300 italic">
              {item.year}
            </span>
          </p>
          <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-balance text-slate-50 sm:text-3xl">
            {item.title}
          </h3>
          <p className="font-mono2 mt-3 text-xs tracking-[0.14em] text-slate-400 uppercase">
            Peran: <span className="text-emerald-300">{item.role}</span>
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300/90">
            {item.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {item.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          {"related" in item && item.related ? (
            <ul className="mt-4 space-y-1.5">
              {item.related.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono2 inline-flex items-center gap-1.5 text-[13px] text-slate-400 underline-offset-4 transition-colors hover:text-emerald-300 hover:underline"
                  >
                    {r.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-7 flex flex-wrap gap-3">
            {item.demo ? (
              <ButtonLink
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </ButtonLink>
            ) : null}
            <ButtonLink
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              variant={item.demo ? "secondary" : "primary"}
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              GitHub Repo
            </ButtonLink>
          </div>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedItem = selected !== null ? projects.items[selected] : null;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-20 border-t border-slate-900 bg-slate-950 py-24 text-slate-100 sm:py-28"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          slug={projects.slug}
          num={projects.num}
          label={projects.label}
          title={projects.title}
          accent={projects.accent}
          align="center"
          sub={projects.sub}
        />

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 [&>*:nth-child(3n+2)]:rotate-[0.4deg] [&>*:nth-child(3n)]:rotate-[-0.4deg]">
          {projects.items.map((item, i) => {
            const featured = i === 0 || i === 3;
            const snippet =
              item.short.length > 120
                ? `${item.short.slice(0, 120)}…`
                : item.short;
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 100}
                className={cn(featured && "md:col-span-2")}
              >
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-label={`Lihat detail ${item.title}`}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:border-emerald-300/40 hover:shadow-xl hover:shadow-black/50"
                >
                  <ProjectVisual item={item} large={featured} />
                  <span className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                    <span className="flex items-start justify-between gap-3">
                      <span className="font-display text-xl leading-snug font-semibold tracking-tight text-slate-50">
                        <span
                          aria-hidden="true"
                          className="font-mono2 mr-2.5 text-xs font-medium text-slate-500"
                        >
                          {`№${String(i + 1).padStart(2, "0")}`}
                        </span>
                        {item.title}
                      </span>
                      <span className="font-display shrink-0 text-sm text-emerald-300 italic">
                        {item.year}
                      </span>
                    </span>
                    <span className="line-clamp-3 text-sm leading-relaxed text-slate-400">
                      {snippet}
                    </span>
                    <span className="mt-auto flex items-end justify-between gap-3 border-t border-slate-800/80 pt-3.5">
                      <span className="flex flex-wrap gap-1.5">
                        {item.tech.slice(0, 4).map((t) => (
                          <span key={t} className="chip">
                            {t}
                          </span>
                        ))}
                      </span>
                      <span className="font-mono2 inline-flex shrink-0 items-center gap-1 text-xs tracking-wider text-slate-500 lowercase transition-colors group-hover:text-emerald-300">
                        detail
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={projects.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono2 inline-flex items-center gap-2 text-sm tracking-[0.1em] text-slate-400 uppercase underline-offset-4 transition-colors hover:text-emerald-300 hover:underline"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            Lihat semua di GitHub
          </a>
        </Reveal>

        {/* Navigasi antar halaman */}
        <Reveal className="mt-14 flex flex-wrap justify-center gap-3.5">
          <Magnet>
            <ButtonLink href={`mailto:${profile.email}`} size="lg">
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
              <span>Ajak Kerja Sama</span>
            </ButtonLink>
          </Magnet>
          <Magnet>
            <ButtonLink href="#skills" variant="secondary" size="lg">
              <Layers className="h-[18px] w-[18px]" aria-hidden="true" />
              <span>Jelajahi Skills</span>
            </ButtonLink>
          </Magnet>
        </Reveal>
      </div>

      {selectedItem && (
        <ProjectModal
          item={selectedItem}
          index={selected as number}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
