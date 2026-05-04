import { createContext, useCallback, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "alexcuriel-audience-view";

/** @typedef {'qa' | 'web'} AudienceView */

function readStoredAudience() {
  if (typeof window === "undefined") return "qa";
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "web" ? "web" : "qa";
  } catch {
    return "qa";
  }
}

const AudienceViewContext = createContext(null);

export function AudienceViewProvider({ children }) {
  const [audience, setAudienceState] = useState(readStoredAudience);

  const setAudience = useCallback((/** @type {AudienceView} */ next) => {
    const v = next === "web" ? "web" : "qa";
    setAudienceState(v);
    try {
      window.localStorage.setItem(STORAGE_KEY, v);
    } catch {
      /* ignore quota / private mode */
    }
  }, []);

  const value = useMemo(() => ({ audience, setAudience }), [audience, setAudience]);

  return <AudienceViewContext.Provider value={value}>{children}</AudienceViewContext.Provider>;
}

export function useAudienceView() {
  const ctx = useContext(AudienceViewContext);
  if (!ctx) {
    throw new Error("useAudienceView must be used within AudienceViewProvider");
  }
  return ctx;
}
