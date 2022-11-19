/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            'code': {
              backgroundColor: theme('colors.orange.500'),
              color: theme('colors.gray.100'),
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
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
