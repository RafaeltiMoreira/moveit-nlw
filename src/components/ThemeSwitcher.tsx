import { useApplication } from "../contexts/ApplicationContext"
import styles from "../styles/components/ThemeSwitcher.module.css"

export function ThemeSwitcher() {
  const { handleChangeTheme } = useApplication()

  return(
    <button className={styles.themeSwitcherButton} onClick={handleChangeTheme}>
      🌓
    </button>
  )
}