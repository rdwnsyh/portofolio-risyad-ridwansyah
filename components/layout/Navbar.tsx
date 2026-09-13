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
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-6"
      >
        {/* Monogram */}
        <a
          href="#top"
          aria-label={nav.homeAria}
          className="font-display text-xl font-semibold tracking-tight text-white italic"
        >
          RR<span className="text-emerald-300">.</span>
        </a>

        {/* Link desktop */}
        <ul className="hidden items-center gap-7 md:flex">
          {nav.links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono2 text-[13px] tracking-[0.14em] text-slate-400 uppercase transition-colors hover:text-emerald-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href={shared.cvPath}
            download={hero.cvFileName}
            className="font-mono2 inline-flex h-10 items-center gap-2 rounded-full border border-slate-700 px-5 text-[13px] tracking-[0.1em] text-slate-200 uppercase transition-all hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-emerald-200"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            CV
          </a>
        </div>

        {/* Kontrol mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? nav.menuClose : nav.menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-200"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Panel mobile */}
      {open && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto w-full max-w-6xl space-y-1 px-6 py-4">
            {nav.links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-mono2 block rounded-xl px-3 py-3 text-sm tracking-[0.14em] text-slate-300 uppercase transition-colors hover:bg-slate-900 hover:text-emerald-300"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <a
                href={shared.cvPath}
                download={hero.cvFileName}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {hero.ctaCV}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
