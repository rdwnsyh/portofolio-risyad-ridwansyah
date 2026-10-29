"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

// Toggle dark/light — dipakai di Navbar (desktop & mobile)
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { content } = useLanguage();
  // Tema tersimpan baru terbaca di klien, jadi tampilkan state netral saat
  // render pertama agar HTML server & klien identik (menghindari hydration mismatch).
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const dark = theme === "dark";
  const isDark = mounted ? dark : true;
  const label = mounted
    ? `${content.theme.toggle} — ${isDark ? content.theme.light : content.theme.dark}`
    : content.theme.toggle;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={mounted ? !isDark : false}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-emerald-300"
    >
      {isDark ? (
        <Sun className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
