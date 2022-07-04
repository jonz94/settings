const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: ['forest', 'emerald'],
  },
}
