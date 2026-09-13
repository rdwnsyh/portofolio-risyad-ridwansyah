"use client";

import { useLanguage, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const options: Locale[] = ["id", "en"];

// Toggle ID | EN — dipakai di Navbar (desktop & mobile)
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, content } = useLanguage();

  return (
    <div
      role="group"
      aria-label={content.nav.languageLabel}
      className={cn(
        "inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 p-1",
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => setLocale(opt)}
          aria-pressed={locale === opt}
          aria-label={`${content.nav.languageLabel}: ${opt.toUpperCase()}`}
          className={cn(
            "font-mono2 h-8 min-w-10 rounded-full px-2.5 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300",
            locale === opt
              ? "bg-emerald-300 text-slate-950 shadow"
              : "text-slate-400 hover:text-slate-100",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
