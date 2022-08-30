import { useEffect, useState } from "react"


const useDarkMode = () => {

    const [theme, setTheme] = useState(localStorage.theme)

    const themeMode = theme === 'light' ? 'dark' : 'light'

    useEffect(() => {
      const root = window.document.documentElement;

      root.classList.remove(theme)
      root.classList.add(themeMode)
      localStorage.setItem('theme', theme);
    }, [theme])
    

  return [themeMode, setTheme]
}

export default useDarkMode