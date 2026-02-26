import { createGlobalStyle } from "styled-components";

import SFProDisplayRegular from "@app/assets/fonts/SFPRODISPLAYREGULAR.OTF";
import SFProDisplayMedium from "@app/assets/fonts/SFPRODISPLAYMEDIUM.OTF";
import SFProDisplayBold from "@app/assets/fonts/SFPRODISPLAYBOLD.OTF";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    src: url('${SFProDisplayRegular}') format('opentype');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('${SFProDisplayMedium}') format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('${SFProDisplayBold}') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html body {
    font-family: 'SF Pro Display', sans-serif;
  }
`;
