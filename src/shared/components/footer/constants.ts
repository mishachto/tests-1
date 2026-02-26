import Instagram from "@mui/icons-material/Instagram";
import Telegram from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import {
  SocialIconEmail,
  SocialIconInstagram,
  SocialIconTelegram,
  SocialIconTwitter,
} from "./Footer.styles";
import flagTr from "@app/assets/images/Flag.webp";
import { EmailIcon } from "@shared/components/icons";

export const languageOptions = [
  { value: "en", label: "English" },
  { value: "tr", label: "Türkçe", icon: flagTr },
  { value: "it", label: "Italiano" },
];

export const socialLinks = [
  {
    Component: SocialIconInstagram,
    Icon: Instagram,
    label: "Instagram",
    href: "#",
    size: 34,
  },
  {
    Component: SocialIconTelegram,
    Icon: Telegram,
    label: "Telegram",
    href: "#",
    size: 34,
  },
  { Component: SocialIconTwitter, Icon: XIcon, label: "X", href: "#" },
  { Component: SocialIconEmail, Icon: EmailIcon, label: "Email", href: "#" },
];
