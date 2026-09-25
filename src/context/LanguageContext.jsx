import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../translations/index.js";

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
}

const LANGS = ["en", "es", "pt"];
const STORAGE_KEY = "lang";

function htmlLang(lang) {
  if (lang === "es" || lang === "pt") return lang;
  return "en";
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(stored)) setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang(lang);
  }, [lang]);

  const setLang = useCallback((next) => {
    const value = LANGS.includes(next) ? next : "en";
    setLangState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
  }, []);

  const t = useCallback((path) => getByPath(translations[lang] ?? translations.en, path), [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
    }),
    [lang, setLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
