import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { GlobalStyles } from "@app/styles/GlobalStyles";
import { HomePage } from "@pages/Home/HomePage";
import { GeoProvider } from "@features/geo";
import { GeoSelector } from "@shared/components";
import "@shared/i18n/i18n";

const App = () => {
  return (
    <GeoProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <GeoSelector />
        <HomePage />
      </ThemeProvider>
    </GeoProvider>
  );
};

export default App;
