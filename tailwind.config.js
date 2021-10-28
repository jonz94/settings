const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sarasa Mono TC Nerd Font"', ...defaultTheme.fontFamily.sans],
        serif: ['"Sarasa Mono TC Nerd Font"', ...defaultTheme.fontFamily.serif],
        mono: ['"Sarasa Mono TC Nerd Font"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['forest', 'emerald'],
  },
}
