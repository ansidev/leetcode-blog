const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindCssTheme = require('tailwindcss-themer')
const themeConfig = require('./theme.config.cjs')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('textColor.style.primary'),
            '--tw-prose-headings': theme('textColor.style.primary'),
            '--tw-prose-bold': theme('textColor.style.primary'),
            '--tw-prose-quotes': theme('textColor.style.primary'),
            '--tw-prose-pre-bg': '#0d1117',
            code: {
              backgroundColor: theme('backgroundColor.style.primary'),
              padding: '5px',
              borderRadius: '3px',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          }
        },
      }),
    },
  },
  plugins: [
    tailwindCssTheme(themeConfig),
    typography(),
  ],
}
