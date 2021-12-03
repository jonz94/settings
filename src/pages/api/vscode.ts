import type { NextApiRequest, NextApiResponse } from 'next'
import { SettingsJsonData } from '../../interfaces/settingsJsonData'

const settingsJson = `{
  // disable navigation breadcrumbs
  "breadcrumbs.enabled": false,

  // make the diff editor not to ignores changes in leading or trailing whitespace
  "diffEditor.ignoreTrimWhitespace": false,

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

  // manually configure file associations to languages
  "files.associations": {
    "composer.lock": "json"
  },

  // git related
  "git.ignoreMissingGitWarning": true,
  "git.inputValidationLength": 72,
  "git.inputValidationSubjectLength": null,

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

  // Dockerfile
  "[dockerfile]": {
    "editor.formatOnSave": false
  },

  // markdown
  "[markdown]": {
    "editor.codeLens": false,
    "editor.formatOnSave": false
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

  // color theme: [extension] zhuangtongfa.material-theme
  "workbench.colorTheme": "One Dark Pro",

  // icon theme: [extension] pkief.material-icon-theme
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.activeIconPack": "angular_ngrx",
  "material-icon-theme.languages.associations": {
    "dotenv": "tune"
  },
  "material-icon-theme.files.associations": {
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
  "vscode-neovim.neovimExecutablePaths.win32": "C:\\\\Users\\\\jonz94\\\\scoop\\\\apps\\\\neovim-nightly\\\\current\\\\bin\\\\nvim.exe",
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
    "file:///home/jonz94/dotfiles/vscode/jonz94.css",
    "file:///Users/jonz94/dotfiles/vscode/jonz94.css",
    "file:///C:/Users/jonz94/dotfiles/vscode/jonz94.css"
  ],

  // [extension] bradlc.vscode-tailwindcss
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript"
  },

  // [extension] onecentlin.laravel-blade
  "blade.format.enable": true
}
`

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<SettingsJsonData>,
) {
  res.status(200).json({ settingsJson })
}
