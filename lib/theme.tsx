"use client";

import { useServerInsertedHTML } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("portfolio-theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}if(t==="light"){document.documentElement.classList.add("light");}}catch(e){}})();`;

export function ThemeScript() {
  useServerInsertedHTML(() => (
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
    />
  ));
  return null;
}

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* abaikan */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeScript />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
