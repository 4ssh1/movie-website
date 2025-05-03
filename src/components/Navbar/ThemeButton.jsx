import {IconButton} from "@mui/material";
import { useThemeMode } from "../../../utilities/context/ThemeContextProvider";
import {FaMoon, FaSun }from 'react-icons/fa'

function ThemeButton() {
    const {darkMode, toggleDarkMode} = useThemeMode()

  return (
        <IconButton color="inherit" onClick={toggleDarkMode} className="size-9">
            {darkMode ? <FaSun  /> : <FaMoon  />}
        </IconButton>
  )
}

export default ThemeButton
