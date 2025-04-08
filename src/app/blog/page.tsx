import Link from 'next/link'
import { getPostSlugs, getPostBySlug } from '@/lib/posts'

export default function BlogPage() {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug))

  return (
    <div className="prose mx-auto p-10">
      <h1>글 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
