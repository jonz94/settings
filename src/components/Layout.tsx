import Head from 'next/head'
import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Notes by jonz94</title>
        <meta name="description" content="notes by jonz94" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex-1 hero">{children}</main>
      <Footer />
    </div>
  )
}
