"use client";

import { ArrowUpRight } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ArrowScribble } from "@/components/shared/Doodles";
import { Reveal } from "@/components/shared/Reveal";

export function Footer() {
  const { footer: t, nav, shared } = useContent();
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: shared.github, Icon: GithubIcon },
    { name: "LinkedIn", href: shared.linkedin, Icon: LinkedinIcon },
  ] as const;

  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden border-t border-slate-900 bg-slate-950 text-slate-100"
    >
      {/* CTA besar */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24">
        <Reveal>
          <a
            href={`mailto:${shared.email}`}
            className="group block"
            aria-label={t.ctaAria}
          >
            <span className="font-mono2 text-xs sm:text-sm tracking-[0.2em] text-emerald-300 lowercase">
              <span aria-hidden="true">( </span>
              {t.ctaEyebrow}
              <span aria-hidden="true"> )</span>
            </span>
            <span className="font-display mt-3.5 sm:mt-4 flex flex-wrap items-center gap-x-3 sm:gap-x-4 text-3xl sm:text-5xl md:text-6xl leading-[1.08] sm:leading-[1.05] font-semibold tracking-tight text-balance text-slate-50">
              {t.ctaTitle}
              <em className="text-emerald-200">{t.ctaAccent}</em>
              <ArrowUpRight
                aria-hidden="true"
                className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 text-slate-500 transition-all duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:text-emerald-300"
              />
            </span>
          </a>
          <ArrowScribble
            className="mt-5 sm:mt-6 w-16 sm:w-20 -scale-x-100 text-slate-600"
            delay={0.4}
          />
        </Reveal>
      </div>

      {/* Kolom bawah */}
      <div className="relative mx-auto grid w-full max-w-6xl gap-8 sm:gap-10 px-4 sm:px-6 py-12 sm:py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a
            href="#top"
            aria-label={t.logoAria}
            className="font-display text-2xl font-semibold tracking-tight text-white italic"
          >
            RR<span className="text-emerald-300">.</span>
          </a>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-slate-400">
            {t.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="font-mono2 text-xs font-medium tracking-[0.24em] text-slate-500 uppercase">
            {t.navHeading}
          </h3>
          <ul className="mt-5 space-y-3">
            {nav.links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[15px] text-slate-300 transition-colors hover:text-emerald-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-mono2 text-xs font-medium tracking-[0.24em] text-slate-500 uppercase">
            {t.connectHeading}
          </h3>
          <ul className="mt-5 space-y-3" aria-label="Social media links">
            {socialLinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-[15px] text-slate-300 transition-colors hover:text-emerald-300"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  {name}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-slate-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-300"
                  />
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${shared.email}`}
                className="text-[15px] break-all text-slate-300 transition-colors hover:text-emerald-300"
              >
                {shared.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bar bawah */}
      <div className="relative border-t border-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:px-6 py-5 sm:py-6 text-[13px] text-slate-500 sm:flex-row">
          <p>
            &copy; {year} {shared.name}
          </p>
          <p className="font-mono2 tracking-wide">{t.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
