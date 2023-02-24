const env = process.env

export default {
  title: 'LeetCode Blog',
  description: 'Solutions for LeetCode problems - Written by ansidev',
  author: {
    name: 'Le Minh Tri',
    nickname: 'ansidev',
    email: 'ansidev@gmail.com',
    avatar: '/ansidev.png',
    homepage: 'https://ansidev.xyz',
    github: 'https://github.com/ansidev',
    twitter: 'https://twitter.com/ansidev',
    telegram: 'https://t.me/ansidev',
    reddit: 'https://reddit.com/u/ansidev',
  },
  favicon: '/favicon.ico',
  faviconMimeType: 'image/x-icon',
  plugins: {
    counterAnalytics: {
      projectId: env.COUNTER_ANALYTICS_ID,
      utcOffset: 7,
    },
    googleAnalytics: {
      projectId: env.GA_ID,
    },
    swetrix: {
      projectId: env.SWETRIX_ID,
    },
  }
}
