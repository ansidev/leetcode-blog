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
  }

  const textDifficultyColors = {
    easy: baseColors['text-inverted'],
    medium: baseColors['text-inverted'],
    hard: baseColors['text-inverted'],
    'easy-hover': themeColors.leetcode.easy,
    'medium-hover': themeColors.leetcode.medium,
    'hard-hover': themeColors.leetcode.hard,
  }

  return {
    textColor: {
      style: {
        primary: baseColors.text,
        'primary-inverted': baseColors['text-inverted'],
        secondary: baseColors.fill,
        link: colors.blue['500'],
        'link-hover': colors.pink['500'],
      },
      site: {
        'title': baseColors.text,
        'header-text': baseColors.text,
        'header-text-hover': baseColors.fill,
      },
      difficulty: {
        ...textDifficultyColors,
      },
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
      difficulty: {
        easy: themeColors.leetcode.easy,
        'easy-hover': baseColors.text,
        medium: themeColors.leetcode.medium,
        'medium-hover': baseColors.text,
        hard: themeColors.leetcode.hard,
        'hard-hover': baseColors.text,
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
      },
      difficulty: {
        ...themeColors.leetcode,
        'easy-hover': themeColors.leetcode.easy,
        'medium-hover': themeColors.leetcode.medium,
        'hard-hover': themeColors.leetcode.hard,
      },
    },
  }
}

const lightTheme = ({ primary, secondary, tertiary }) => {
  const baseColors = {
    fill: primary,
    text: secondary,
    'text-inverted': tertiary,
  }

  const textDifficultyColors = {
    easy: baseColors.text,
    medium: baseColors.text,
    hard: baseColors.text,
    'easy-hover': themeColors.leetcode.easy,
    'medium-hover': themeColors.leetcode.medium,
    'hard-hover': themeColors.leetcode.hard,
  }

  return {
    textColor: {
      style: {
        primary: baseColors.text,
        'primary-inverted': baseColors['text-inverted'],
        secondary: baseColors.fill,
        link: colors.blue['500'],
        'link-hover': colors.pink['500'],
      },
      site: {
        'title': baseColors['text-inverted'],
        'header-text': baseColors['text-inverted'],
        'header-text-hover': colors.gray['300'],
      },
      difficulty: {
        ...textDifficultyColors,
      },
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
      difficulty: {
        easy: themeColors.leetcode.easy,
        'easy-hover': baseColors.text,
        medium: themeColors.leetcode.medium,
        'medium-hover': baseColors.text,
        hard: themeColors.leetcode.hard,
        'hard-hover': baseColors.text,
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
    difficulty: {
      ...themeColors.leetcode,
      'easy-hover': themeColors.leetcode.easy,
      'medium-hover': themeColors.leetcode.medium,
      'hard-hover': themeColors.leetcode.hard,
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
    },
  ]
}
