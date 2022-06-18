import type { NextApiRequest, NextApiResponse } from 'next'
import { SettingsJsonData } from '~/models/SettingsJsonData'

export default async function handler(_req: NextApiRequest, res: NextApiResponse<SettingsJsonData>) {
  const response = await fetch('https://raw.githubusercontent.com/jonz94/dotfiles/main/vscode/settings/settings.json')
  const settingsJson = await response.text()

  res.status(200).json({ settingsJson })
}
