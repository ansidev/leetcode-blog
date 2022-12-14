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
              color: theme('colors.pink.500'),
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
