module.exports = {
  extends: ['next/core-web-vitals', 'prettier', 'plugin:tailwindcss/recommended'],
  settings: {
    tailwindcss: {
      config: 'tailwind.config.cjs',
    },
  },
}
