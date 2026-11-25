"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dict, type Dict, type Lang } from "@/lib/content";

type Theme = "light" | "dark";

type SiteContext = {
  lang: Lang;
  t: Dict;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
};

const Ctx = createContext<SiteContext | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  // Read what the early inline script already applied, so state matches the page.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ar" || saved === "en") setLang(saved);
    } catch {}
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = dict[lang].meta.title;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang, ready]);

  const toggleLang = useCallback(() => setLang((l) => (l === "en" ? "ar" : "en")), []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ lang, t: dict[lang], toggleLang, theme, toggleTheme }),
    [lang, theme, toggleLang, toggleTheme],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSite() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}
