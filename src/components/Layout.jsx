import { useTheme } from "@mui/material";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const theme = useTheme()
  const isDark = theme.palette.mode === "dark"

  return (
    <div>
      <div className={`${isDark ? "bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]"
            : "bg-gradient-to-b from-[#cfe8ff] to-[#a0c4ff]"} w-full overflow-x-hidden px-1
            `}>
        {children}
      </div>
      <Footer />
    </div>
    
  );
};

export default Layout;
