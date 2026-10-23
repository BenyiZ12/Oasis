import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { es } from "./es";
import { en } from "./en";

export type Lang = "es" | "en";

const DICTIONARIES: Record<Lang, typeof es> = { es, en };

type Translation = typeof es;

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

export function extractLangFromPath(pathname: string): Lang {
  const segment = pathname.split("/")[1];
  return segment === "en" ? "en" : "es";
}

export function translatePath(pathname: string, lang: Lang): string {
  const parts = pathname.split("/");
  parts[1] = lang;
  return parts.join("/") || `/${lang}`;
}

export interface LangProviderProps {
  children: ReactNode;
  defaultLang?: Lang;
}

export function LangProvider({ children, defaultLang = "es" }: LangProviderProps) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("oasis_lang") as Lang | null;
    if (stored === "es" || stored === "en") {
      setLang(stored);
    } else {
      setLang(extractLangFromPath(window.location.pathname));
    }
  }, []);

  const t = DICTIONARIES[lang];

  const changeLang = (next: Lang) => {
    setLang(next);
    localStorage.setItem("oasis_lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useTranslations() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useTranslations debe usarse dentro de LangProvider");
  }
  return ctx;
}
