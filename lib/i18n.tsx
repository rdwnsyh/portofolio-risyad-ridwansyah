"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { idContent, type SiteContent } from "@/content/id";
import { enContent } from "@/content/en";

export type Locale = "id" | "en";

const dictionaries: Record<Locale, SiteContent> = {
  id: idContent,
  en: enContent,
};

const STORAGE_KEY = "portfolio-locale";

type LanguageContextValue = {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: "id",
  content: idContent,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Baca preferensi tersimpan secara lazy (tanpa effect → lolos lint react-hooks)
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "id";
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "id";
    } catch {
      return "id";
    }
  });

  // Sinkronkan <html lang> + simpan preferensi
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* abaikan */
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);

  return (
    <LanguageContext.Provider
      value={{ locale, content: dictionaries[locale], setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useContent(): SiteContent {
  return useContext(LanguageContext).content;
}
