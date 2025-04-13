import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import RoutesConfig from "../RoutesConfig";
import ThemeContextProvider, { useThemeMode } from "../utilities/ThemeContextProvider";
import ContextWrapper from "../utilities/ContextWrapper";

function AppContent() {
  const { darkMode } = useThemeMode(); 

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoutesConfig />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <ContextWrapper>
        <AppContent />
      </ContextWrapper>
    </ThemeContextProvider>
  );
}

export default App;
