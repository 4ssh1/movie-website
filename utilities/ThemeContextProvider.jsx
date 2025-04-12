import {useState, useEffect, createContext, useContext} from 'react'

const ThemeContext = createContext()


function ThemeContextProvider({children}) {
  const [darkMode, setDarkMode] = useState(false)
  
  const toggleDarkMode = ()=> setDarkMode(prev => !prev)
  
  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme')
    setDarkMode(savedTheme !== 'light')
  }, [])
  
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
