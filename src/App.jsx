import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import RoutesConfig from "../RoutesConfig";
import ThemeContextProvider, { useThemeMode } from "../utilities/ThemeContextProvider";

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
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
