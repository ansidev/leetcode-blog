const colors = require('tailwindcss/colors')

const themeColors = {
  leetcode: {
    easy: '#00af9b',
    medium: '#ffb800',
    hard: '#ff2d55',
  },
  light: {
    secondary: colors.zinc['900'],
    tertiary: colors.zinc['50'],
  },
  dark: {
    secondary: colors.zinc['100'],
    tertiary: colors.zinc['900'],
  },
}

const darkTheme = ({ primary, secondary, tertiary }) => {
  const baseColors = {
    fill: primary,
    text: secondary,
    'text-inverted': tertiary,
    link: colors.blue['500'],
    'link-hover': colors.pink['500'],
  }

  return {
    primary: primary,
    secondary: secondary,
    tertiary: tertiary,
    site: {
      'bg': '#1a1a1a',
      'header-bg': '#282828',
      'header-border': colors.zinc['600'],
      'title': baseColors.text,
      'header-text': baseColors.text,
      'header-text-hover': baseColors.fill,
    },
  }
}

const lightTheme = ({ primary, secondary, tertiary }) => {
  const baseColors = {
    fill: primary,
    text: secondary,
    'text-inverted': tertiary,
    link: colors.blue['500'],
    'link-hover': colors.pink['500'],
  }

  return {
    primary: primary,
    secondary: secondary,
    tertiary: tertiary,
    site: {
      'bg': colors.white,
      'header-bg': primary,
      'header-border': primary,
      'title': baseColors['text-inverted'],
      'header-text': baseColors['text-inverted'],
      'header-text-hover': colors.gray['300'],
    },
  }
}

const siteTheme = ({ primary, secondary, tertiary }, isDark = true) =>
  isDark
    ? darkTheme({ primary, secondary, tertiary })
    : lightTheme(darkTheme({ primary, secondary, tertiary }))

module.exports = {
  defaultTheme: {
    extend: {
      colors: siteTheme({
        primary: '#ffa116',
        secondary: themeColors.dark['secondary'],
        tertiary: themeColors.dark['tertiary'],
      }, true)
    }
  },
  themes: [
    {
      name: 'leetcode-light',
      extend: {
        colors: siteTheme({
          primary: '#ffa116',
          secondary: themeColors.light['secondary'],
          tertiary: themeColors.light['tertiary'],
        }, false)
      }
    }
  ]
}
