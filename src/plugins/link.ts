import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const __dirname = path.resolve()

export const getWikiLinks = () => {
  const postDir = path.resolve(__dirname, './src/pages')
  const dirents = fs.readdirSync(postDir, { withFileTypes: true })
  const posts = dirents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => {
      const src = fs.readFileSync(path.join(postDir, dirent.name), 'utf-8')
      const { data } = matter(src)
      return { slug: data.slug }
    })
  return posts.flatMap((post: { slug: any }) => `${post.slug}`)
}
