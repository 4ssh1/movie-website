import {IconButton, Typography } from "@mui/material";
import { useThemeMode } from "../../utilities/ThemeContextProvider";
import {FaMoon, FaSun }from 'react-icons/fa'

function ThemeButton() {
    const {darkMode, toggleDarkMode} = useThemeMode()

  return (
    <div>
        <Typography variant="h4"></Typography>
        <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
        </IconButton>
    </div>
  )
}

export default ThemeButton
