const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-style-primary-text)',
            '--tw-prose-headings': 'var(--color-style-primary-text)',
            '--tw-prose-bold': 'var(--color-style-primary-text)',
            '--tw-prose-quotes': 'var(--color-style-primary-text)',
            '--tw-prose-pre-bg': '#0d1117',
            code: {
              backgroundColor: 'var(--color-style-primary-bg)',
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
      },
    },
  },
}
