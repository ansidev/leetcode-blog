module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  astroAllowShorthand: false,
}
