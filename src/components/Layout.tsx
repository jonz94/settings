import Head from 'next/head'
import { FC } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Settings by jonz94</title>
        <meta name="description" content="settings by jonz94" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex-1 hero">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
