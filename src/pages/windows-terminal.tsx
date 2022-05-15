import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getHighlighter, setCDN } from 'shiki'
import CodeBlock from '../components/CodeBlock'
import { SettingsJsonData } from '../models/SettingsJsonData'

async function fetchData() {
  const response = await fetch('/api/windows-terminal')
  const data = (await response.json()) as SettingsJsonData
  return data.settingsJson
}

async function getShikiHighlighter() {
  setCDN('https://unpkg.com/shiki/')
  return getHighlighter({ theme: 'one-dark-pro', langs: ['jsonc'] })
}

const WindowsTerminalPage: NextPage = () => {
  const [settingsJson, setSettingsJson] = useState('')

  useEffect(() => {
    Promise.all([getShikiHighlighter(), fetchData()]).then(([highlighter, code]) => {
      setSettingsJson(highlighter.codeToHtml(code, { lang: 'jsonc' }))
    })
  }, [])

  return (
    <>
      <Head>
        <title>Windows Terminal Settings | Settings by jonz94</title>
        <meta name="description" content="jonz94's windows terminal setting" />
      </Head>

      <div className="hero-content w-full p-0 md:p-4">
        <div className="flex w-full flex-col">
          <h1 className="text-center text-5xl font-bold">Windows Terminal Settings</h1>
          <p className="my-6 text-center text-xl">Screenshots</p>
          <Image
            className="rounded-none md:rounded-lg"
            src="https://i.imgur.com/D8G6EiF.png"
            alt="screenshot of jonz94's windows terminal"
            width={1347}
            height={924}
            priority
          />
          <p className="my-6 text-center text-xl">settings.json</p>
          <CodeBlock settingsJson={settingsJson} />
        </div>
      </div>
    </>
  )
}

export default WindowsTerminalPage
