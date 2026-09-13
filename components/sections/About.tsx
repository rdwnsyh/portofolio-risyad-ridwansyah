"use client";

import Image from "next/image";
import {
  Award,
  Briefcase,
  CheckCircle2,
  Download,
  FolderOpen,
  GraduationCap,
  Mail,
} from "lucide-react";
import portrait from "@/public/images/portrait-risyad-ridwansyah.jpg";
import { useContent } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Spark } from "@/components/shared/Doodles";
import { Magnet } from "@/components/shared/Magnet";

const highlightIcons = [Briefcase, CheckCircle2, GraduationCap, Award] as const;

export function About() {
  const { about, hero, shared } = useContent();

  return (
    <section
      id="about"
      aria-label={about.sectionAria}
      className="relative scroll-mt-20 border-t border-slate-900 bg-slate-950 py-24 text-slate-100 sm:py-28"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          slug={about.slug}
          num={about.num}
          label={about.label}
          title={about.title}
          accent={about.accent}
        />

        <div className="mt-16 grid items-start gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Portrait arch (sticky di desktop) */}
          <Reveal className="mx-auto w-full max-w-[460px] lg:sticky lg:top-32">
            <div className="arch-frame aspect-[4/5] rotate-[-1.6deg] transition-transform duration-500 hover:rotate-0">
              <Spark
                className="absolute -top-8 -right-6 z-[2] w-[52px] text-emerald-300/90"
                delay={0.7}
              />
              {/* Foto portrait */}
              <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-2xl border border-slate-800 bg-slate-900 shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
                <Image
                  src={portrait}
                  alt={about.portraitAlt}
                  fill
                  sizes="(min-width: 1024px) 460px, (min-width: 640px) 460px, calc(100vw - 48px)"
                  className="object-cover object-top"
                  placeholder="blur"
                />
              </div>
              {/* Pelat keterangan ala galeri */}
              <div className="absolute -bottom-6 left-5 z-[2] flex rotate-[1.2deg] items-center gap-3.5 rounded-xl border border-slate-800 bg-slate-900 px-4.5 py-3 shadow-xl shadow-black/40">
                <div>
                  <b className="font-display block text-lg leading-tight font-medium text-slate-50 italic">
                    {shared.name}
                  </b>
                  <span className="font-mono2 mt-0.5 block text-[11px] tracking-[0.1em] text-slate-500 uppercase">
                    {about.highlights[2].detail}
                  </span>
                </div>
                <small className="font-mono2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-emerald-300">
                  ● Available
                </small>
              </div>
            </div>
          </Reveal>

          {/* Tubuh narasi */}
          <div className="flex flex-col gap-7">
            <Reveal as="h3" delay={0}>
              <span className="font-display block text-2xl leading-snug font-medium tracking-tight text-slate-50 sm:text-[1.7rem]">
                {about.ledePre}
                <em className="text-emerald-300">{about.ledeEm1}</em>
                {about.ledeMid}
                <em className="text-emerald-300">{about.ledeEm2}</em>
                {about.ledePost}
              </span>
            </Reveal>

            <Reveal delay={120}>
              <div className="drop-cap space-y-4 text-base leading-[1.85] text-slate-300/90 sm:text-lg">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="grid gap-4.5 sm:grid-cols-2">
                {about.highlights.map(({ value, label, detail }, i) => {
                  const Icon = highlightIcons[i % highlightIcons.length];
                  return (
                    <div
                      key={label}
                      className="hl-tilt rounded-xl border border-slate-800 bg-slate-900/60 p-5.5 transition-all duration-300 hover:border-emerald-300/40 hover:shadow-xl hover:shadow-black/40"
                    >
                      <Icon
                        className="h-6 w-6 text-emerald-300"
                        aria-hidden="true"
                      />
                      <b className="font-display mt-3 block text-lg font-medium text-slate-50">
                        {value} {label}
                      </b>
                      <span className="mt-1 block text-[13px] leading-relaxed text-slate-500">
                        {detail}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-2 flex flex-wrap gap-3.5">
                <Magnet>
                  <ButtonLink
                    href={shared.cvPath}
                    download={hero.cvFileName}
                    size="lg"
                  >
                    <Download className="h-[18px] w-[18px]" aria-hidden="true" />
                    <span>{about.ctaCV}</span>
                  </ButtonLink>
                </Magnet>
                <Magnet>
                  <ButtonLink
                    href={`mailto:${shared.email}`}
                    variant="secondary"
                    size="lg"
                  >
                    <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                    <span>{about.ctaContact}</span>
                  </ButtonLink>
                </Magnet>
              </div>
            </Reveal>

            {/* Penegas fokus */}
            <Reveal delay={440}>
              <div className="rounded-xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-slate-900/60 to-slate-900/60 p-5.5">
                <p className="text-sm leading-relaxed text-slate-300">
                  <span className="font-semibold text-emerald-200">
                    {about.focusPre}
                  </span>{" "}
                  {about.focusText}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Navigasi antar halaman */}
        <Reveal className="mt-20 flex flex-wrap gap-3.5">
          <Magnet>
            <ButtonLink href="#experience" size="lg">
              <Briefcase className="h-[18px] w-[18px]" aria-hidden="true" />
              <span>{about.pageExperience}</span>
            </ButtonLink>
          </Magnet>
          <Magnet>
            <ButtonLink href="#projects" variant="secondary" size="lg">
              <FolderOpen className="h-[18px] w-[18px]" aria-hidden="true" />
              <span>{about.pageProjects}</span>
            </ButtonLink>
          </Magnet>
        </Reveal>
      </div>
    </section>
  );
}
