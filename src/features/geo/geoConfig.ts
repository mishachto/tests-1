import logoEn from "@app/assets/images/logo.webp";
import heroEn from "@app/assets/images/img-hero.webp";
import bgEn from "@app/assets/images/bg-home.webp";
import footerLogoEn from "@app/assets/images/footer-logo.webp";
import flagEn from "@app/assets/images/Flag.webp";
import type { GeoId, GeoTheme } from "./types";

export const geoConfigs: Record<GeoId, GeoTheme> = {
  en: {
    buttonGradient: "linear-gradient(84.38deg, #ff8d6b 7.59%, #ffba47 96.71%)",
    footerGradient: "linear-gradient(270deg, #06225d 0%, #02011f 37.03%)",
    footerBorderGradient:
      "linear-gradient(90deg, #FF8D6B 7.59%, #FFBA47 96.71%)",
    accentColor: "#ffba47",
    images: {
      logo: logoEn,
      hero: heroEn,
      background: bgEn,
      footerLogo: footerLogoEn,
      flag: flagEn,
    },
  },
  tr: {
    buttonGradient: "linear-gradient(84.38deg, #e63946 7.59%, #f4a261 96.71%)",
    footerGradient: "linear-gradient(270deg, #6b0f1a 0%, #1a0a0e 37.03%)",
    footerBorderGradient:
      "linear-gradient(90deg, #e63946 7.59%, #f4a261 96.71%)",
    accentColor: "#e63946",
    images: {
      logo: logoEn,
      hero: heroEn,
      background: bgEn,
      footerLogo: footerLogoEn,
      flag: flagEn,
    },
  },
  it: {
    buttonGradient: "linear-gradient(84.38deg, #2d6a4f 7.59%, #52b788 96.71%)",
    footerGradient: "linear-gradient(270deg, #1b4332 0%, #081c15 37.03%)",
    footerBorderGradient:
      "linear-gradient(90deg, #2d6a4f 7.59%, #52b788 96.71%)",
    accentColor: "#52b788",
    images: {
      logo: logoEn,
      hero: heroEn,
      background: bgEn,
      footerLogo: footerLogoEn,
      flag: flagEn,
    },
  },
};
