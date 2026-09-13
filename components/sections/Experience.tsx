"use client";

import { useEffect, useRef } from "react";
import { FolderOpen, Mail } from "lucide-react";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button";
import { Magnet } from "@/components/shared/Magnet";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Experience() {
  const railRef = useRef<HTMLDivElement>(null);

  // Garis rel terisi mengikuti posisi scroll (seperti referensi)
  useEffect(() => {
    const onScroll = () => {
      const el = railRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const pct = Math.max(
        0,
        Math.min(100, ((anchor - rect.top) / rect.height) * 100),
      );
      el.style.setProperty("--rail-fill", `${pct}%`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const total = experience.items.length;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-20 border-t border-slate-900 bg-slate-950 py-24 text-slate-100 sm:py-28"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          slug={experience.slug}
          num={experience.num}
          label={experience.label}
          title={experience.title}
          accent={experience.accent}
        />
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            {experience.sub}
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative mx-auto mt-14 max-w-[880px] pr-0 pl-[34px] max-sm:pl-[26px]">
          <div ref={railRef} aria-hidden="true" className="xp-rail" />
          <ol className="flex list-none flex-col">
            {experience.items.map((item, i) => (
              <li
                key={`${item.company}-${item.role}`}
                className="xp-item relative border-b border-slate-800/80 py-11 pr-0 pb-10 pl-[34px] last:border-b-0 max-sm:py-8 max-sm:pl-[22px]"
              >
                {/* Penanda inisial perusahaan di rel */}
                <div
                  aria-hidden="true"
                  className="xp-dot absolute top-12 left-[-34px] z-[2] -translate-x-1/2 rounded-full border border-slate-700/80 bg-slate-950 px-2.5 py-1.5 max-sm:left-[-26px] max-sm:px-2 max-sm:py-1"
                >
                  <span className="font-mono2 text-[10px] leading-none font-bold tracking-[0.08em] whitespace-nowrap text-slate-300 uppercase select-none">
                    {item.initials}
                  </span>
                </div>

                <Reveal variant="slide-right">
                  <div className="xp-content">
                    <p className="mb-2.5 flex items-baseline gap-4">
                      <span
                        aria-hidden="true"
                        className="font-display text-base text-slate-500 italic"
                      >
                        {String(total - i).padStart(2, "0")}
                      </span>
                      <span className="font-mono2 text-xs font-medium tracking-[0.14em] text-emerald-300 uppercase">
                        {item.period}
                      </span>
                    </p>
                    <h3 className="xp-role font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.15] font-semibold tracking-tight text-balance text-slate-50">
                      {item.role}
                    </h3>
                    <p className="font-display mt-1.5 mb-3.5 text-lg text-slate-500 italic">
                      <span aria-hidden="true">at </span>
                      {item.company}
                    </p>
                    <p className="mb-4 max-w-[640px] text-[15px] leading-[1.7] text-slate-300/90">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.mainTech.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <p
            aria-hidden="true"
            className="font-display mt-7 ml-[34px] text-lg text-slate-500 italic max-sm:ml-[22px]"
          >
            — {experience.endNote}{" "}
            <span className="text-emerald-300">{experience.endAccent}</span>
          </p>
        </div>

        {/* Navigasi antar halaman */}
        <Reveal className="mt-20 flex flex-wrap gap-3.5">
          <Magnet>
            <ButtonLink href="#projects" size="lg">
              <FolderOpen className="h-[18px] w-[18px]" aria-hidden="true" />
              <span>Lihat Proyek</span>
            </ButtonLink>
          </Magnet>
          <Magnet>
            <ButtonLink
              href={`mailto:${profile.email}`}
              variant="secondary"
              size="lg"
            >
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
              <span>Ajak Kerja Sama</span>
            </ButtonLink>
          </Magnet>
        </Reveal>
      </div>
    </section>
  );
}
