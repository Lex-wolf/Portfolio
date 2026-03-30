import { createContext, useContext, useEffect, useState } from "react";

const HydrationContext = createContext(false);

export function HydrationProvider({ children }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return <HydrationContext.Provider value={hydrated}>{children}</HydrationContext.Provider>;
}

export function useHydrated() {
  return useContext(HydrationContext);
}
