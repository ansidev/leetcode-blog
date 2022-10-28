import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const __dirname = path.resolve()

export const getWikiLinks = () => {
  const postDir = path.resolve(__dirname, './src/pages')
  const posts = fs
    .readdirSync(postDir)
    .map((file: string) => {
      const src = fs.readFileSync(path.join(postDir, file), 'utf-8')
      const { data } = matter(src)
      return { slug: data.slug }
    })
  return posts.flatMap((post: { slug: any }) => `${post.slug}`)
}
