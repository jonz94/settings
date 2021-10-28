import withDarkMode, { useDarkMode } from 'next-dark-mode'
import type { AppProps } from 'next/app'
import '../styles/fonts.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { darkModeActive } = useDarkMode()

  return (
    <div
      data-theme={darkModeActive ? 'forest' : 'emerald'}
      className="text-base-content bg-base-100"
    >
      <Component {...pageProps} />
    </div>
  )
}

export default withDarkMode(MyApp)
