import {useState, useEffect, createContext, useContext} from 'react'

const ThemeContext = createContext()


function ThemeContextProvider({children}) {
  const toggleDarkMode = ()=> setDarkMode(prev => !prev)

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme !== 'light' : false;
  });
   
  useEffect(()=>{
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])
   
  return (
    <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeMode(){
  return useContext(ThemeContext)
}

export default ThemeContextProvider
