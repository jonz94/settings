import Head from 'next/head'
import { FC } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: FC = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Settings by jonz94</title>
        <meta name="description" content="settings by jonz94" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="hero flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
