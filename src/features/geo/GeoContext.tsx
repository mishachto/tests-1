import { createContext, useContext, useState, useMemo, useCallback } from "react";
import i18next from "i18next";
import { geoConfigs } from "./geoConfig";
import type { GeoId, GeoContextValue } from "./types";

const GEO_STORAGE_KEY = "geo_id";
const VALID_GEOS: GeoId[] = ["en", "tr", "it"];

const getInitialGeo = (): GeoId => {
  const saved = localStorage.getItem(GEO_STORAGE_KEY);
  if (saved && VALID_GEOS.includes(saved as GeoId)) {
    return saved as GeoId;
  }
  return "en";
};

const GeoContext = createContext<GeoContextValue | null>(null);

export const GeoProvider = ({ children }: { children: React.ReactNode }) => {
  const [geoId, setGeoIdState] = useState<GeoId>(getInitialGeo);

  const setGeoId = useCallback((id: GeoId) => {
    setGeoIdState(id);
    localStorage.setItem(GEO_STORAGE_KEY, id);
    i18next.changeLanguage(id);
  }, []);

  const geoTheme = useMemo(() => geoConfigs[geoId], [geoId]);

  const value = useMemo(
    () => ({ geoId, geoTheme, setGeoId }),
    [geoId, geoTheme, setGeoId],
  );

  return <GeoContext.Provider value={value}>{children}</GeoContext.Provider>;
};

export const useGeo = (): GeoContextValue => {
  const ctx = useContext(GeoContext);
  if (!ctx) {
    throw new Error("useGeo must be used within a GeoProvider");
  }
  return ctx;
};
