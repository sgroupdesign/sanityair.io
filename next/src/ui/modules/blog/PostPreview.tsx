import processUrl from '@/lib/processUrl'
import Date from '@/ui/Date'
import Img from '@/ui/Img'
import Link from 'next/link'

export default function PostPreview({ post }: { post: Sanity.BlogPost }) {
	return (
		<Link
			className="group flex flex-col gap-y-6"
			href={processUrl(post, { base: false })}
		>
			<figure className="aspect-video bg-ink/5">
				<Img
					className="aspect-[inherit] w-full object-cover"
					image={post.metadata.image}
					imageWidth={600}
				/>
			</figure>
			<div className="">
				<h3 className="mb-0 text-2xl">{post.title}</h3>
				<Date value={post.publishDate} />
			</div>
			<span className="">Find out more</span>
		</Link>
	)
}
