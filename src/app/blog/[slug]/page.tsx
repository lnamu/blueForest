import { getPostSlugs, getPostHtml } from '@/lib/posts'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { metadata, contentHtml } = await getPostHtml(params.slug)

  return (
    <div className="prose mx-auto p-10">
      <h1>{metadata.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(metadata.date).toLocaleDateString('ko-KR')}
      </p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )
}


