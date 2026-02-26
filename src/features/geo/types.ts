export type GeoId = "en" | "tr" | "it";

export type GeoTheme = {
  buttonGradient: string;
  footerGradient: string;
  footerBorderGradient: string;
  accentColor: string;
  images: {
    logo: string;
    hero: string;
    background: string;
    footerLogo: string;
    flag: string;
  };
};

export type GeoContextValue = {
  geoId: GeoId;
  geoTheme: GeoTheme;
  setGeoId: (id: GeoId) => void;
};
