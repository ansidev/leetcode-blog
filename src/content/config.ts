import { defineCollection, z } from 'astro:content'

const leetcodeSolutionCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    keywords: z.array(z.string()),
    author: z.string(),
    pubDate: z.string(),
    difficulty: z.string(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  'leetcode-solutions': leetcodeSolutionCollection,
}
