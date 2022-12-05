/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',

  pluginSearchDirs: false,
  plugins: [require('prettier-plugin-packagejson'), require('prettier-plugin-organize-imports')],
}
