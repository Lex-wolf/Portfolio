import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../translations/index.js";

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.lang = lang === "es" ? "es" : "en";
  }, [lang]);

  const t = useCallback((path) => getByPath(translations[lang], path), [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
    }),
    [lang, t],
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
