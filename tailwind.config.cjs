const { tailwindColorVariables } = require('./tailwind.plugin.cjs')

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}) / ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        style: {
          primary: withOpacity('--theme-color-text'),
          'primary-inverted': withOpacity('--theme-color-text-inverted'),
          secondary: withOpacity('--theme-color-fill'),
        }
      },
      backgroundColor: {
        style: {
          primary: withOpacity('--theme-color-fill'),
          secondary: withOpacity('--theme-color-text'),
          'secondary-inverted': withOpacity('--theme-color-text-inverted'),
        }
      },
      borderColor: {
        style: {
          primary: withOpacity('--theme-color-fill'),
          secondary: withOpacity('--theme-color-text'),
          'secondary-inverted': withOpacity('--theme-color-text-inverted'),
        }
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
    }
  },
  plugins: [
    tailwindColorVariables({
      colorFormat: 'rgb',
      onlyColorGroups: [
        // '-orange',
        // '-pink',
        // '-slate',
        // '-zinc',
      ]
    }),
    require('@tailwindcss/typography'),
  ],
}
