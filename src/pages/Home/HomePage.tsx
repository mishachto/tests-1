import { Container } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGeo } from "@features/geo";
import { Button, Footer } from "@shared/components";
import { GameModal } from "@shared/components/gameModal/GameModal";
import { Wrapper, Logo, HeroImage } from "./HomePage.styles";

const GAME_URL = process.env.GAME_URL || "";

export const HomePage = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const { t } = useTranslation();
  const { geoTheme } = useGeo();

  const handleOpenGame = () => {
    setIsGameOpen(true);
  };

  const handleCloseGame = () => {
    setIsGameOpen(false);
  };

  return (
    <>
      <Wrapper $bgImage={geoTheme.images.background}>
        <Container maxWidth="sm" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Logo src={geoTheme.images.logo} alt="Logo" />
          <HeroImage src={geoTheme.images.hero} alt="Hero Image" />
          <Button text={t("openGame")} styles={{ maxWidth: "358.5px" }} onClick={handleOpenGame} />
        </Container>
      </Wrapper>
      <GameModal isOpen={isGameOpen} onClose={handleCloseGame} gameUrl={GAME_URL} />
      <Footer />
    </>
  );
};
