import icon18Plus from "@app/assets/images/icon-18+.webp";
import iconLicense from "@app/assets/images/icon-license.webp";
import { useTranslation } from "react-i18next";
import { useGeo } from "@features/geo";
import { Button } from "@shared/components";
import { DownloadIcon } from "@shared/components/icons";
import { Select } from "@shared/components/select";
import {
  DownloadConteiner,
  FooterLogo,
  FooterWrapper,
  Heading,
  LanguageSelectBox,
  LegalIcon,
  LegalItem,
  LegalSection,
  LegalText,
  Logo,
  SocialIcons,
  SocialLabel,
  SocialSection,
  SubTitle,
} from "./Footer.styles";
import { languageOptions, socialLinks } from "./constants";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const { geoTheme } = useGeo();

  const handleLanguageChange = (val: string) => {
    i18n.changeLanguage(val);
    localStorage.setItem("lang_id", val);
  };

  return (
    <FooterWrapper $gradient={geoTheme.footerGradient}>
      <FooterLogo src={geoTheme.images.footerLogo} alt="Footer Logo" />
      <DownloadConteiner
        $borderColor1={geoTheme.accentColor}
        $borderColor2={geoTheme.accentColor}
      >
        <Logo src={geoTheme.images.logo} alt="Logo" />
        <Heading>{t("downloadCasino")}</Heading>
        <SubTitle>{t("playAnywhere")}</SubTitle>
        <Button
          text={t("installApp")}
          styles={{ maxWidth: "250px", textTransform: "capitalize" }}
          startIcon={DownloadIcon}
        />
      </DownloadConteiner>
      <LegalSection>
        <LegalItem>
          <LegalIcon src={icon18Plus} alt="18+" />
          <LegalText>{t("only18")}</LegalText>
        </LegalItem>
        <LegalItem>
          <LegalIcon src={iconLicense} alt="License" />
          <LegalText>{t("licensedBy")}</LegalText>
        </LegalItem>
      </LegalSection>
      <SocialSection>
        <LanguageSelectBox>
          <Select
            value={i18n.language}
            defaultValue="en"
            options={languageOptions}
            onChange={handleLanguageChange}
          />
        </LanguageSelectBox>
        <SocialSection>
          <SocialLabel>{t("socialMedia")}</SocialLabel>
          <SocialIcons>
            {socialLinks.map(({ Component, Icon, label, href, size }) => (
              <Component key={label} href={href} aria-label={label}>
                <Icon style={{ fontSize: size || 28 }} />
              </Component>
            ))}
          </SocialIcons>
        </SocialSection>
      </SocialSection>
    </FooterWrapper>
  );
};
