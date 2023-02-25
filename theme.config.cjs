const colors = require('tailwindcss/colors')

const themeColors = {
  leetcode: {
    easy: '#00af9b',
    medium: '#ffb800',
    hard: '#ff2d55',
  },
  light: {
    secondary: colors.gray['900'],
    tertiary: colors.gray['50'],
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
    textColor: {
      style: {
        primary: baseColors.text,
        'primary-inverted': baseColors['text-inverted'],
        secondary: baseColors.fill,
      },
      site: {
        'title': baseColors.text,
        'header-text': baseColors.text,
        'header-text-hover': baseColors.fill,
      }
    },
    backgroundColor: {
      style: {
        primary: baseColors.fill,
        secondary: baseColors.text,
        'secondary-inverted': baseColors['text-inverted'],
      },
      site: {
        'bg': '#1a1a1a',
        'header-bg': '#282828',
      },
    },
    borderColor: {
      style: {
        primary: baseColors.fill,
        secondary: baseColors.text,
        'secondary-inverted': baseColors['text-inverted'],
      },
      site: {
        'header-border': colors.zinc['600'],
      }
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
    textColor: {
      style: {
        primary: baseColors.text,
        'primary-inverted': baseColors['text-inverted'],
        secondary: baseColors.fill,
      },
      site: {
        'title': baseColors['text-inverted'],
        'header-text': baseColors['text-inverted'],
        'header-text-hover': colors.gray['300'],
      }
    },
    backgroundColor: {
      style: {
        primary: baseColors.fill,
        secondary: baseColors.text,
        'secondary-inverted': baseColors['text-inverted'],
      },
      site: {
        'bg': colors.white,
        'header-bg': primary,
      },
    },
    borderColor: {
      style: {
        primary: baseColors.fill,
        secondary: baseColors.text,
        'secondary-inverted': baseColors['text-inverted'],
      },
      site: {
        'header-border': primary,
      }
    },
  }
}

const siteTheme = ({ primary, secondary, tertiary }, isDark = true) =>
  isDark
    ? darkTheme({ primary, secondary, tertiary })
    : lightTheme({ primary, secondary, tertiary })

module.exports = {
  defaultTheme: {
    extend: siteTheme({
      primary: '#ffa116',
      secondary: themeColors.dark['secondary'],
      tertiary: themeColors.dark['tertiary'],
    }, true)
  },
  themes: [
    {
      name: 'leetcode-light',
      extend: siteTheme({
        primary: '#ffa116',
        secondary: themeColors.light['secondary'],
        tertiary: themeColors.light['tertiary'],
      }, false)
    }
  ]
}
