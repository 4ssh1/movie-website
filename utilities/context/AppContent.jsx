import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import RoutesConfig from "../../RoutesConfig";
import { useThemeMode } from "./ThemeContextProvider";

function AppContent() {
    const { darkMode } = useThemeMode(); 
  
    const theme = createTheme({
      palette: {
        mode: darkMode ? "dark" : "light"
      }
    });
  
    return (
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <RoutesConfig />
        </ThemeProvider>
    );
  }

  export default AppContent