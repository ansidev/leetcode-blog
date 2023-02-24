const env = process.env

export default {
  title: 'LeetCode Blog',
  description: 'Solutions for LeetCode problems - Written by ansidev',
  author: 'ansidev',
  authorAvatar: '/ansidev.png',
  favicon: '/favicon.ico',
  faviconMimeType: 'image/x-icon',
  plugins: {
    googleAnalytics: {
      id: env.GA_ID,
    },
  }
}
