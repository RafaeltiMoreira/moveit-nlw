import { ReactNode } from "react"
import { useApplication } from "../contexts/ApplicationContext"

interface AppContextProps {
  children: ReactNode
}

export function AppContext({ children }: AppContextProps) {
  const { theme } = useApplication()

  return (
    <div className={theme}>
      {children}
    </div>
  )
}

export default AppContext