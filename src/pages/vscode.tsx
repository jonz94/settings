import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getHighlighter, setCDN } from 'shiki'
import CodeBlock from '~/components/CodeBlock'
import { SettingsJsonData } from '~/models/SettingsJsonData'

async function fetchData() {
  const response = await fetch('/api/vscode')
  const data = (await response.json()) as SettingsJsonData
  return data.settingsJson
}

async function getShikiHighlighter() {
  setCDN('https://unpkg.com/shiki/')
  return getHighlighter({ theme: 'one-dark-pro', langs: ['jsonc'] })
}

const VSCodePage: NextPage = () => {
  const [settingsJson, setSettingsJson] = useState('')

  useEffect(() => {
    Promise.all([getShikiHighlighter(), fetchData()]).then(([highlighter, code]) => {
      setSettingsJson(highlighter.codeToHtml(code, { lang: 'jsonc' }))
    })
  }, [])

  return (
    <>
      <Head>
        <title>VSCode Settings | Settings by jonz94</title>
        <meta name="description" content="jonz94's vscode setting" />
      </Head>

      <div className="hero-content w-full p-0 md:p-4">
        <div className="flex w-full flex-col">
          <h1 className="text-center text-5xl font-bold">VSCode Settings</h1>
          <p className="my-6 text-center text-xl">Screenshots</p>
          <Image
            className="rounded-none md:rounded-lg"
            src="https://i.imgur.com/ZfcIo2u.png"
            alt="screenshot of jonz94's vscode"
            width={1920}
            height={1080}
            priority
          />
          <p className="my-6 text-center text-xl">settings.json</p>
          <CodeBlock settingsJson={settingsJson} />
        </div>
      </div>
    </>
  )
}

export default VSCodePage
