"use client";

import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

// Toggle dark/light — dipakai di Navbar (desktop & mobile)
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { content } = useLanguage();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={!dark}
      aria-label={`${content.theme.toggle} — ${dark ? content.theme.light : content.theme.dark}`}
      title={dark ? content.theme.light : content.theme.dark}
      className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-emerald-300"
    >
      {dark ? (
        <Sun className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
