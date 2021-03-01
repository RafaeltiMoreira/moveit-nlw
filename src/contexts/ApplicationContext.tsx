import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ApplicationContextData {
  theme: "light" | "dark",
  handleChangeTheme: () => void
}

interface ApplicationProviderProps {
  children: ReactNode
}

export const ApplicationContext = createContext({} as ApplicationContextData)

export function ApplicationProvider({ children }: ApplicationProviderProps) {
  const [theme, setTheme] = useState<"light"|"dark">("light")

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light"|"dark"
    
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  function handleChangeTheme() {
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <ApplicationContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ApplicationContext.Provider>
  )
}

export const useApplication = () => {
  const applicationContext = useContext(ApplicationContext)
  return applicationContext
}