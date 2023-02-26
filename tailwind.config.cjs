const tailwindCssTheme = require('tailwindcss-themer')
const themeConfig = require('./theme.config.cjs')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
            '--tw-prose-code': theme('textColor.style.primary-inverted'),
            '--tw-prose-pre-bg': theme('textColor.style.primary'),
            code: {
              backgroundColor: theme('backgroundColor.style.primary'),
              paddingTop: '2px',
              paddingBottom: '5px',
              paddingLeft: '5px',
              paddingRight: '5px',
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
