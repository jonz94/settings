module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',

  plugins: [require('prettier-plugin-packagejson'), require('./.prettier-plugins-workaround.cjs')],
}
