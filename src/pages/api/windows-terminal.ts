import type { NextApiRequest, NextApiResponse } from 'next'
import { SettingsJsonData } from '../../interfaces/settingsJsonData'

const settingsJson = `{
  "$schema": "https://aka.ms/terminal-profiles-schema",

  // Open arch wsl as extra tab when opening windows terminal
  // "startupActions": "; new-tab -p Arch",

  // If enabled, selections are automatically copied to your clipboard.
  "copyOnSelect": false,

  // If enabled, formatted data is also copied to your clipboard
  "copyFormatting": false,

  // Windows PowerShell Core
  "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",

  "profiles": {
    "defaults": {
      "closeOnExit": "always",
      "colorScheme": "One Half Dark",
      "cursorColor": "#39C5BB",
      "cursorShape": "filledBox",
      "fontFace": "Sarasa Nerd Font",
      "fontSize": 16,
      "padding": "8, 8, 0, 8",
      "scrollbarState": "visible"
    },
    "list": [
      {
        "commandline": "pwsh.exe -NoLogo",
        "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
        "name": "PowerShell",
        "source": "Windows.Terminal.PowershellCore"
      },
      {
        "guid": "{a5a97cb8-8961-5535-816d-772efe0c6a3f}",
        "name": "Arch",
        "source": "Windows.Terminal.Wsl",

        // starting at wsl's user home directory
        // there are several ways to make it works
        "startingDirectory": "\\\\wsl$\\Arch\\home\\jonz94",
        // "startingDirectory": "\\\\wsl.localhost\\Arch\\home\\jonz94",
        // "commandline": "wsl.exe -d Arch --cd ~",

        "icon": "E:\\\\Pictures\\\\logos\\\\archwsl-StoreLogo.png"
      },
      {
        "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
        "name": "Ubuntu",
        "source": "Windows.Terminal.Wsl",

        // starting at wsl's user home directory
        // there are several ways to make it works
        "startingDirectory": "\\\\wsl$\\Ubuntu\\home\\jonz94",
        // "startingDirectory": "\\\\wsl.localhost\\Ubuntu\\home\\jonz94",
        // "commandline": "wsl.exe -d Ubuntu --cd ~",

        "icon": "E:\\\\Pictures\\\\logos\\\\ubuntu-favicon.png"
      },
      {
        "commandline": "powershell.exe",
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "hidden": false,
        "name": "Windows PowerShell"
      },
      {
        "commandline": "cmd.exe",
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        "hidden": false,
        "name": "Command Prompt"
      },
      {
        "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
        "hidden": true,
        "name": "Azure Cloud Shell",
        "source": "Windows.Terminal.Azure"
      }
    ]
  },

  // Add custom color schemes to this array.
  // To learn more about color schemes, visit https://aka.ms/terminal-color-schemes
  "schemes": [
    {
      "background": "#121212",
      "black": "#343A43",
      "blue": "#61AFEF",
      "brightBlack": "#282C34",
      "brightBlue": "#61AFEF",
      "brightCyan": "#56B6C2",
      "brightGreen": "#98C379",
      "brightPurple": "#C678DD",
      "brightRed": "#E06C75",
      "brightWhite": "#DCDFE4",
      "brightYellow": "#E5C07B",
      "cursorColor": "#FFFFFF",
      "cyan": "#56B6C2",
      "foreground": "#DCDFE4",
      "green": "#98C379",
      "name": "One Half Dark",
      "purple": "#C678DD",
      "red": "#E06C75",
      "selectionBackground": "#FFFFFF",
      "white": "#DCDFE4",
      "yellow": "#E5C07B"
    }
  ],

  // Add custom actions and keybindings to this array.
  // To unbind a key combination from your defaults.json, set the command to "unbound".
  // To learn more about actions and keybindings, visit https://aka.ms/terminal-keybindings
  "actions": [
    // Press Ctrl+Shift+F to open the search box
    {
      "command": "find",
      "keys": "ctrl+shift+f"
    },
    // New pane
    {
      "command": {
        "action": "splitPane",
        "split": "horizontal",
        "splitMode": "duplicate"
      },
      "keys": "alt+shift+d"
    },
    {
      "command": {
        "action": "splitPane",
        "split": "vertical",
        "splitMode": "duplicate"
      },
      "keys": "alt+d"
    }
  ]
}
`

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<SettingsJsonData>,
) {
  res.status(200).json({ settingsJson })
}
