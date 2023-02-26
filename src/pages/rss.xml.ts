import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'

import siteConfig from '@/configs/site'

const { title, description } = siteConfig

export const get = async ({ site }: APIContext) => {
  if (site === undefined || site.toString().length === 0) {
    return {
      body: ''
    }
  }

  const allPosts = await getCollection('leetcode-solutions')

  return rss({
    title,
    description,
    site: site.toString(),
    items: allPosts.map((post) => ({
      title: post.data.title,
      description: `LeetCode Problem #${post.data.title}`,
      pubDate: new Date(post.data.pubDate),
      link: `/${post.slug}`,
    })),
    customData: '<language>en-US</language>',
  })
}
