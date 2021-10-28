import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Notes by jonz94</title>
        <meta name="description" content="notes by jonz94" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-1 hero">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello, world!</h1>
            <p className="mb-5">Hope you enjoy all the notes shared by me!</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
