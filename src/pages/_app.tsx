import withDarkMode, { useDarkMode } from 'next-dark-mode'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/fonts.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { darkModeActive } = useDarkMode()

  return (
    <div data-theme={darkModeActive ? 'forest' : 'emerald'} className="bg-base-100 text-base-content">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default withDarkMode(MyApp)
