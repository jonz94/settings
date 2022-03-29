import type { NextApiRequest, NextApiResponse } from 'next'
import { SettingsJsonData } from '../../interfaces/settingsJsonData'

const settingsJson = `{
  // main
  "editor.cursorSmoothCaretAnimation": true,
  "editor.fontFamily": "'Sarasa Mono TC', 'Sarasa Mono TC Nerd Font', 'Noto Color Emoji'",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.formatOnSave": true,
  "editor.lineNumbers": "relative",
  "editor.minimap.enabled": false,
  "editor.occurrencesHighlight": false,
  "editor.renderWhitespace": "boundary",
  "editor.rulers": [80, 120],
  "editor.smoothScrolling": true,
  "editor.wordWrap": "on",

  // disable navigation breadcrumbs
  "breadcrumbs.enabled": false,

  // scroll related settings
  "editor.cursorSurroundingLines": 5,
  "editor.cursorSurroundingLinesStyle": "all",
  "editor.scrollBeyondLastLine": false,

  // git related
  "git.ignoreMissingGitWarning": true,
  "git.inputValidationLength": 72,
  "git.inputValidationSubjectLength": null,

  // git commit message input font
  "scm.inputFontFamily": "'Sarasa Mono TC', 'Sarasa Mono TC Nerd Font', 'Noto Color Emoji'",

  // make the diff editor not to ignores changes in leading or trailing whitespace
  "diffEditor.ignoreTrimWhitespace": false,

  // disable telemetry
  "telemetry.telemetryLevel": "off",

  // terminal profile
  "terminal.integrated.defaultProfile.windows": "pwsh -NoLogo",
  "terminal.integrated.profiles.windows": {
    "pwsh -NoLogo": {
      "path": "pwsh",
      "args": ["-NoLogo"]
    }
  },

  // terminal font
  "terminal.integrated.fontFamily": "'Sarasa Mono TC', 'Sarasa Mono TC Nerd Font', 'Noto Color Emoji'",
  "terminal.integrated.fontSize": 15,

  // terminal color
  "workbench.colorCustomizations": {
    // onehalf dark (https://github.com/sonph/onehalf)
    "terminal.foreground": "#dcdfe4",
    "terminal.background": "#121212",
    "terminal.ansiBlack": "#282c34",
    "terminal.ansiRed": "#e06c75",
    "terminal.ansiGreen": "#98c379",
    "terminal.ansiYellow": "#e5c07b",
    "terminal.ansiBlue": "#61afef",
    "terminal.ansiMagenta": "#c678dd",
    "terminal.ansiCyan": "#56b6c2",
    "terminal.ansiWhite": "#dcdfe4",
    "terminal.ansiBrightBlack": "#282c34",
    "terminal.ansiBrightRed": "#e06c75",
    "terminal.ansiBrightGreen": "#98c379",
    "terminal.ansiBrightYellow": "#e5c07b",
    "terminal.ansiBrightBlue": "#61afef",
    "terminal.ansiBrightMagenta": "#c678dd",
    "terminal.ansiBrightCyan": "#56b6c2",
    "terminal.ansiBrightWhite": "#dcdfe4"
  },

  // directly edit settings.json by default
  "workbench.settings.editor": "json",

  // start without any editor
  "workbench.startupEditor": "none",

  // smooth scrolling
  "workbench.list.smoothScrolling": true,

  // disable the watermark tips
  "workbench.tips.enabled": false,

  // use custom title style
  "window.titleBarStyle": "custom",

  // zoom in!
  "window.zoomLevel": 2,

  // manually configure file associations to languages
  "files.associations": {
    "*.xccolortheme": "xml",
    "composer.lock": "json"
  },

  // Dockerfile
  "[dockerfile]": {
    "editor.formatOnSave": false
  },

  // lua
  "[lua]": {
    "editor.defaultFormatter": "JohnnyMorganz.stylua"
  },

  // markdown
  "[markdown]": {
    "editor.codeLens": false
  },

  // prettier
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[php]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // color theme: [extension] zhuangtongfa.material-theme
  "workbench.colorTheme": "One Dark Pro",

  // icon theme: [extension] pkief.material-icon-theme
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.activeIconPack": "angular_ngrx",
  "material-icon-theme.languages.associations": {
    "dotenv": "tune"
  },
  "material-icon-theme.files.associations": {
    "*.keystore": "key",
    "docker-compose.alpha.yml": "docker",
    "docker-compose.next.yml": "docker"
  },
  "material-icon-theme.folders.associations": {
    "bootstrap": "core",
    "concerns": "utils",
    "console": "tasks",
    "contracts": "meta",
    "exceptions": "debug",
    "factories": "generator",
    "feature": "coverage",
    "framework": "core",
    "http": "global",
    "migrations": "upload",
    "notifications": "mail",
    "requests": "rules",
    "seeds": "dump",
    "sessions": "secure",
    "storage": "dump",
    "unit": "test"
  },

  // [extension] joelday.docthis
  "docthis.includeMemberOfOnClassMembers": false,
  "docthis.includeMemberOfOnInterfaceMembers": false,
  "docthis.inferTypesFromNames": true,

  // [extension] mhutchie.git-graph
  "git-graph.date.format": "Relative",

  // [extension] bmewburn.vscode-intelephense-client
  "intelephense.files.maxSize": 10000000,

  // [extension] yzhang.markdown-all-in-one
  "markdown.extension.list.indentationSize": "inherit",
  "markdown.extension.toc.levels": "2..6",

  // [extension] mehedidracula.php-namespace-resolver
  "namespaceResolver.sortAlphabetically": true,
  "namespaceResolver.sortOnSave": false,
  "namespaceResolver.showMessageOnStatusBar": true,

  // [extension] asvetliakov.vscode-neovim
  "vscode-neovim.neovimExecutablePaths.darwin": "/Users/jonz94/.local/bin/nvim",
  "vscode-neovim.neovimInitVimPaths.darwin": "/Users/jonz94/.config/nvim/vscode-neovim/init.vim",
  "vscode-neovim.neovimExecutablePaths.linux": "/home/jonz94/.local/bin/nvim",
  "vscode-neovim.neovimInitVimPaths.linux": "/home/jonz94/.config/nvim/vscode-neovim/init.vim",
  "vscode-neovim.neovimExecutablePaths.win32": "C:\\\\Users\\\\jonz94\\\\scoop\\\\apps\\\\neovim-bare-nightly\\\\current\\\\bin\\\\nvim.exe",
  "vscode-neovim.neovimInitVimPaths.win32": "C:\\\\Users\\\\jonz94\\\\AppData\\\\Local\\\\nvim\\\\vscode-neovim\\\\init.vim",

  // [extension] vscodevim.vim
  "vim.leader": " ",
  "vim.autoSwitchInputMethod.enable": true,
  "vim.autoSwitchInputMethod.defaultIM": "com.apple.keylayout.ABC",
  "vim.autoSwitchInputMethod.obtainIMCmd": "/usr/local/bin/im-select",
  "vim.autoSwitchInputMethod.switchIMCmd": "/usr/local/bin/im-select {im}",
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["leader", "w"],
      "commands": ["workbench.action.files.save"]
    },
    {
      "before": ["leader", "q"],
      "commands": ["workbench.action.closeActiveEditor"]
    },
    {
      "before": ["leader", "d"],
      "commands": ["workbench.action.closeActiveEditor"]
    },
    {
      "before": ["u"],
      "commands": ["undo"]
    },
    {
      "before": ["<C-r>"],
      "commands": ["redo"]
    }
  ],
  "vim.visualModeKeyBindings": [
    {
      "before": ["leader", "w"],
      "commands": ["workbench.action.files.save"]
    }
  ],

  // [extension] be5invis.vscode-custom-css
  "vscode_custom_css.imports": [
    "https://raw.githubusercontent.com/jonz94/dotfiles/main/vscode/jonz94.css"
  ],

  // [extension] bradlc.vscode-tailwindcss
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript"
  },

  // [extension] onecentlin.laravel-blade
  "blade.format.enable": true,

  // [extension] ms-vscode.powershell
  "powershell.integratedConsole.showOnStartup": false,
  "powershell.promptToUpdatePowerShell": false,
  "powershell.codeFormatting.preset": "OTBS",
  "powershell.codeFormatting.useCorrectCasing": true,

  // [extension] jgclark.vscode-todo-highlight
  "todohighlight.keywords": [
    {
      "text": "TODO(string):",
      "regex": {
        "pattern": "(?<=^|\\"|\\\\s)TODO(\\\\([A-Za-z0-9-]+\\\\))?:"
      },
      "color": "#fff",
      "backgroundColor": "#ffbd2a",
      "overviewRulerColor": "rgba(255,189,42,0.8)"
    },
    {
      "text": "FIXME(string):",
      "regex": {
        "pattern": "(?<=^|\\"|\\\\s)FIXME(\\\\([A-Za-z0-9-]+\\\\))?:"
      },
      "color": "#fff",
      "backgroundColor": "#f06292",
      "overviewRulerColor": "rgba(240,98,146,0.8)"
    },
    {
      "text": "NOTE(string):",
      "regex": {
        "pattern": "(?<=^|\\"|\\\\s)NOTE(\\\\([A-Za-z0-9-]+\\\\))?:"
      },
      "color": "white",
      "backgroundColor": "#6fb4c0",
      "overviewRulerColor": "grey",
      "isWholeLine": false
    }
  ]
}
`

export default function handler(_req: NextApiRequest, res: NextApiResponse<SettingsJsonData>) {
  res.status(200).json({ settingsJson })
}
