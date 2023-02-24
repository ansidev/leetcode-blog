const colors = require('tailwindcss/colors')

const themeColors = {
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
  return {
    primary: primary,
    secondary: secondary,
    tertiary: tertiary,
  }
}

const lightTheme = ({ primary, secondary, tertiary }) => {
  return {
    primary: primary,
    secondary: secondary,
    tertiary: tertiary,
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
