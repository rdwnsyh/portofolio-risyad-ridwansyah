"use client";

import { ArrowDown, Download, Mail } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ArrowScribble, Spark, Squiggle, Stamp } from "@/components/shared/Doodles";
import { Magnet } from "@/components/shared/Magnet";
import { Marquee } from "@/components/shared/Marquee";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Risyad Ridwansyah",
  jobTitle:
    "Web Developer, Quality Assurance, Backend Developer, Fullstack Developer",
} as const;

export function Hero() {
  const { hero, shared } = useContent();

  const socials = [
    {
      label: hero.socialGithub,
      href: shared.github,
      Icon: GithubIcon,
    },
    {
      label: hero.socialLinkedin,
      href: shared.linkedin,
      Icon: LinkedinIcon,
    },
    {
      label: hero.socialEmail,
      href: `mailto:${shared.email}`,
      Icon: Mail,
    },
  ] as const;

  // Item pertama diulang di akhir agar rotator CSS berputar mulus
  const rotatorRoles = [...hero.roles, hero.roles[0]];

  return (
    <section
      id="top"
      aria-label={hero.sectionAria}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-clip"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...personSchema,
            email: `mailto:${shared.email}`,
            url: shared.linkedin,
            sameAs: [shared.github, shared.linkedin],
          }),
        }}
      />

      {/* Orb aksen samar */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_70%_62%_at_50%_30%,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 content-end items-end gap-8 px-6 pt-36 pb-14 md:pt-40 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex flex-col items-start">
          {/* Badge status */}
          <Badge
            variant="success"
            className="hero-fade font-mono2 mb-10 px-4 py-2 text-xs tracking-[0.1em] uppercase"
          >
            <span className="relative flex h-[7px] w-[7px]">
              <span className="hero-pulse-dot relative inline-flex h-[7px] w-[7px] rounded-full bg-emerald-400" />
            </span>
            {hero.status}
          </Badge>

          {/* Sapaan */}
          <p
            className="hero-fade font-mono2 mb-4 text-sm font-medium tracking-[0.2em] text-emerald-300 lowercase"
            style={{ animationDelay: "0.15s" }}
          >
            <span aria-hidden="true">( </span>
            {hero.greeting}
            <span aria-hidden="true"> )</span>
          </p>

          {/* Nama serif raksasa */}
          <h1
            id="home-heading"
            className="font-display mb-7 text-[clamp(3.4rem,11vw,8rem)] leading-[0.98] font-semibold tracking-tight text-balance text-slate-50"
          >
            <span className="mb-[-0.22em] inline-block overflow-hidden pb-[0.22em] align-bottom">
              <span className="inline-block animate-[hero-rise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.25s_both]">
                {hero.firstName}
              </span>
            </span>{" "}
            <span className="mb-[-0.22em] inline-block overflow-hidden pb-[0.22em] align-bottom text-emerald-200 italic">
              <span className="relative inline-block animate-[hero-rise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
                {hero.lastName}
                <Squiggle className="absolute bottom-[-0.06em] left-[2%] h-auto w-[96%] text-sky-300/90" />
              </span>
            </span>
          </h1>

          {/* Role rotator */}
          <p className="hero-fade mb-6" style={{ animationDelay: "0.55s" }}>
            <span className="sr-only">{hero.roles.join(", ")}</span>
            <span
              aria-hidden="true"
              className="font-mono2 block h-[1.5em] overflow-hidden text-sm font-medium tracking-[0.06em] whitespace-nowrap text-slate-400 uppercase sm:text-base"
            >
              <span className="hero-roles-list">
                {rotatorRoles.map((role, i) => (
                  <span
                    key={`${role}-${i}`}
                    className="block h-[1.5em] leading-[1.5em]"
                  >
                    <span className="text-emerald-300">→ </span>
                    {role}
                  </span>
                ))}
              </span>
            </span>
          </p>

          {/* Tagline */}
          <p
            className="hero-fade mb-10 max-w-xl text-base leading-relaxed text-pretty text-slate-300/90 sm:text-lg"
            style={{ animationDelay: "0.65s" }}
          >
            {hero.tagline}
          </p>

          {/* CTA magnetis */}
          <div
            className="hero-fade flex flex-wrap gap-3.5"
            style={{ animationDelay: "0.75s" }}
          >
            <Magnet>
              <ButtonLink href={shared.projectsAnchor} size="lg">
                {hero.ctaProjects}
                <ArrowDown
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </ButtonLink>
            </Magnet>
            <Magnet>
              <ButtonLink
                href={shared.cvPath}
                download={hero.cvFileName}
                variant="secondary"
                size="lg"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {hero.ctaCV}
              </ButtonLink>
            </Magnet>
          </div>

          {/* Sosial */}
          <div
            className="hero-fade mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.85s" }}
          >
            {socials.map(({ label, href, Icon }) => {
              const isEmail = href.startsWith("mailto:");
              return (
                <ButtonLink
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  variant="ghost"
                  size="icon"
                  {...(isEmail
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </ButtonLink>
              );
            })}
            <a
              href={`mailto:${shared.email}`}
              className="ml-1 text-sm break-all text-slate-500 underline-offset-4 transition-colors hover:text-emerald-300 hover:underline"
            >
              {shared.email}
            </a>
          </div>
        </div>

        {/* Doodle aside */}
        <div
          aria-hidden="true"
          className="hero-fade relative flex flex-col items-center gap-4 pb-6 max-lg:absolute max-lg:top-24 max-lg:right-5 max-lg:pb-0 max-lg:gap-2"
          style={{ animationDelay: "1s" }}
        >
          <Spark className="w-11 self-end text-emerald-300/80 max-lg:w-7" delay={1.5} />
          <Stamp
            text={`${hero.status} ✳ `}
            id="hero-stamp"
            className="h-[138px] w-[138px] text-slate-400 max-lg:h-[84px] max-lg:w-[84px]"
          />
          <ArrowScribble
            className="w-[72px] rotate-[14deg] text-slate-500 max-lg:hidden"
            delay={1.8}
          />
        </div>
      </div>

      {/* Marquee + scroll cue */}
      <div className="hero-fade relative" style={{ animationDelay: "1.1s" }}>
        <Marquee items={[...hero.roles, hero.status]} duration={44} />
        <div
          aria-hidden="true"
          className="absolute right-8 bottom-20 hidden flex-col items-center gap-2.5 lg:flex"
        >
          <span className="font-mono2 text-[11px] tracking-[0.24em] text-slate-500 uppercase [writing-mode:vertical-rl]">
            scroll
          </span>
          <span className="hero-scroll-drip block h-11 w-px bg-slate-700" />
        </div>
      </div>
    </section>
  );
}
