const env = process.env

export default {
  title: 'LeetCode Blog',
  description: 'Solutions for LeetCode problems - Written by ansidev',
  author: 'ansidev',
  authorAvatar: '/ansidev.png',
  favicon: '/favicon.ico',
  faviconMimeType: 'image/x-icon',
  plugins: {
    counterAnalytics: {
      pid: env.COUNTER_ANALYTICS_ID,
    },
    googleAnalytics: {
      id: env.GA_ID,
    },
    swetrix: {
      pid: env.SWETRIX_ID,
    },
  }
}
