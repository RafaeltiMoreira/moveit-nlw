import { ThemeSwitcher } from "../components/ThemeSwitcher"
import { ApplicationProvider } from "../contexts/ApplicationContext"
import { AppContext } from "./_appContext"
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApplicationProvider>
    <AppContext>
      <>
        <Component {...pageProps} />
        <ThemeSwitcher/>
      </>
    </AppContext>
  </ApplicationProvider>
  ) 
}

export default MyApp
