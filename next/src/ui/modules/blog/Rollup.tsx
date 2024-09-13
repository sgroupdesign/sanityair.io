import { fetchSanity, groq } from '@/lib/sanity'
import { cn } from '@/lib/utils'
import { PortableText } from '@portabletext/react'
import PostPreview from './PostPreview'

export default async function Rollup({
	content,
	limit = 100,
	layout,
	containerFullWidth,
}: Partial<{
	content: any
	limit?: number
	containerFullWidth: boolean
	layout: 'grid' | 'carousel'
}>) {
	const posts = await fetchSanity<Sanity.BlogPost[]>(
		groq`*[_type == 'blog.post'][0...$limit]|order(publishDate desc){
			...,
			categories[]->
		}`,
		{
			params: { limit },
			tags: ['posts'],
		},
	)

	return (
		<section
			className={cn('space-y-8', containerFullWidth ? 'p-6' : 'section')}
		>
			<header className="richtext">
				<PortableText value={content} />
			</header>

			<div
				className={cn(
					'gap-6',
					layout === 'grid' ? 'grid grid-cols-2 lg:grid-cols-3' : 'carousel',
					posts.length > 3 && '',
				)}
			>
				{posts?.map((post, key) => (
					<div key={key}>
						<PostPreview post={post} />
					</div>
				))}
			</div>
		</section>
	)
}
