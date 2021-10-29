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
    Promise.all([getShikiHighlighter(), fetchData()]).then(
      ([highlighter, code]) => {
        setSettingsJson(highlighter.codeToHtml(code, 'jsonc'))
      },
    )
  }, [])

  return (
    <>
      <Head>
        <title>Windows Terminal Settings | Settings by jonz94</title>
        <meta name="description" content="jonz94's windows terminal setting" />
      </Head>

      <div className="p-0 w-full md:p-4 hero-content">
        <div className="flex flex-col w-full">
          <h1 className="text-center mb-5 text-5xl font-bold">
            Windows Terminal Settings
          </h1>
          <p className="text-center mb-5 text-xl">settings.json</p>
          <CodeBlock settingsJson={settingsJson} />
        </div>
      </div>
    </>
  )
}

export default WindowsTerminalPage
