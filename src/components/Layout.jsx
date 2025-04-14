import { Box, useTheme } from "@mui/material";

const Layout = ({ children }) => {
  const theme = useTheme()
  const isDark = theme.palette.mode === "dark"

  return (
    <Box 
      sx={{
        background: isDark
          ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)" // dark mode gradient
          : "linear-gradient(to right, #cfe8ff, #a0c4ff)", // light mode gradient
        minHeight: "100vh",
      }}
      
    >
      {children}
    </Box>
  );
};

export default Layout;
