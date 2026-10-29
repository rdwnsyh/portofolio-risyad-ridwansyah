"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { LanguageToggle } from "@/components/shared/LanguageToggle";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { nav, hero, shared } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-2 px-4 sm:px-6"
      >
        {/* Monogram */}
        <a
          href="#top"
          aria-label={nav.homeAria}
          className="font-display text-xl font-semibold tracking-tight text-white italic"
        >
          RR<span className="text-emerald-300">.</span>
        </a>

        {/* Link desktop & tablet */}
        <ul className="hidden items-center gap-5 xl:flex xl:gap-7">
          {nav.links.map(({ label, href }) => (
            <li key={href} className="shrink-0">
              <a
                href={href}
                className="font-mono2 whitespace-nowrap text-[12px] tracking-[0.12em] text-slate-400 uppercase transition-colors hover:text-emerald-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 xl:flex xl:gap-3 xl:border-l xl:border-slate-800 xl:pl-5">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href={shared.cvPath}
            download={hero.cvFileName}
            className="font-mono2 inline-flex h-9 lg:h-10 items-center gap-1.5 lg:gap-2 rounded-full border border-slate-700 px-3.5 lg:px-5 text-[12px] lg:text-[13px] tracking-[0.1em] text-slate-200 uppercase transition-all hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-emerald-200"
          >
            <Download className="h-3.5 w-3.5 lg:h-4 lg:w-4" aria-hidden="true" />
            CV
          </a>
        </div>

        {/* Kontrol mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? nav.menuClose : nav.menuOpen}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-800 text-slate-200 transition-colors hover:border-slate-600"
          >
            {open ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Panel mobile */}
      {open && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-md xl:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-h-[calc(100dvh-4rem)] w-full max-w-6xl overflow-y-auto px-4 py-3 sm:px-6 sm:py-4"
          >
            <ul className="flex flex-col gap-1">
              {nav.links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="font-mono2 block rounded-xl px-3 py-3 text-[12px] leading-none tracking-[0.16em] text-slate-300 uppercase transition-colors hover:bg-slate-900 hover:text-emerald-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-slate-800 pt-3">
              <a
                href={shared.cvPath}
                download={hero.cvFileName}
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {hero.ctaCV}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
