import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).map((filename) => filename.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug, metadata: data, content }
}

export async function getPostHtml(slug: string) {
  const { metadata, content } = getPostBySlug(slug)
  const processedContent = await remark().use(html).process(content)
  return {
    slug,
    metadata,
    contentHtml: processedContent.toString(),
  }
}
