import siteConfig from '@/site.config'
import rss from '@astrojs/rss'

const { title, description } = siteConfig

export const get = () =>
  rss({
    title,
    description,
    site: import.meta.env.SITE,
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-US</language>`,
  })
