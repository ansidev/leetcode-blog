import rss from '@astrojs/rss';
import siteConfig from '@/site.config'

const { title, description } = siteConfig

export const get = () => rss({
  title,
  description,
  site: import.meta.env.SITE,
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-US</language>`,
})
