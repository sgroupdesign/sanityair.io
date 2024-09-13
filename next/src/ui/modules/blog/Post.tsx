import Date from '@/ui/Date'
import AnchoredHeading from '@/ui/modules/RichtextModule/AnchoredHeading'
import Image from '@/ui/modules/RichtextModule/Image'
import { PortableText } from '@portabletext/react'
import Categories from './Categories'
import ReadTime from './ReadTime'

export default function Post({ post }: { post: Sanity.BlogPost }) {
	return (
		<article>
			<header className="section space-y-4 text-center">
				<h1 className="h1 text-balance">{post.title}</h1>
				<div className="flex flex-wrap items-center justify-center gap-x-4">
					<Date value={post.publishDate} />
					<Categories categories={post.categories} />
					<ReadTime value={post.readTime} />
				</div>
			</header>

			<div className="section grid gap-8 md:grid-cols-[1fr,auto]">
				<div className="richtext mx-auto max-w-screen-sm [&>:not(:first-of-type)]:!mt-[1em]">
					<PortableText
						value={post.body}
						components={{
							block: {
								h2: (node) => <AnchoredHeading as="h2" {...node} />,
								h3: (node) => <AnchoredHeading as="h3" {...node} />,
							},
							types: {
								image: Image,
							},
						}}
					/>
				</div>
			</div>
		</article>
	)
}
