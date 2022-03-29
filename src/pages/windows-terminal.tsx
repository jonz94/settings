import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getHighlighter, setCDN } from 'shiki'
import CodeBlock from '../components/CodeBlock'
import { SettingsJsonData } from '../interfaces/settingsJsonData'

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
          <h1 className="mb-5 text-center text-5xl font-bold">Windows Terminal Settings</h1>
          <p className="mb-5 text-center text-xl">settings.json</p>
          <CodeBlock settingsJson={settingsJson} />
        </div>
      </div>
    </>
  )
}

export default WindowsTerminalPage
