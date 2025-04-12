import {IconButton, Typography } from "@mui/material";
import { useThemeMode } from "../../utilities/ThemeContextProvider";
import {FaMoon, FaSun }from 'react-icons/fa'

function ThemeButton() {
    const {darkMode, toggleDarkMode} = useThemeMode()

  return (
    <div className="px-4">
        <Typography variant="h4"></Typography>
        <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </IconButton>
    </div>
  )
}

export default ThemeButton
