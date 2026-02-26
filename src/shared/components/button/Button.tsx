import { ButtonP } from "@shared/types/button";
import { useGeo } from "@features/geo";
import { ButtonCustomStyle } from "./Button.styles";

export const Button = ({
  text,
  startIcon: StartIcon,
  endIcon: EndIcon,
  styles,
  onClick,
}: ButtonP) => {
  const { geoTheme } = useGeo();

  return (
    <ButtonCustomStyle
      disableRipple
      variant="contained"
      style={styles}
      onClick={onClick}
      $gradient={geoTheme.buttonGradient}
      startIcon={StartIcon ? <StartIcon style={{ fontSize: 23 }} /> : undefined}
      endIcon={EndIcon ? <EndIcon /> : undefined}
    >
      {text}
    </ButtonCustomStyle>
  );
};
