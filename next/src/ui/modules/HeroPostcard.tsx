import { cn } from '@/lib/utils'
import CTAList from '@/ui/CTAList'
import Img from '@/ui/Img'
import Pretitle from '@/ui/Pretitle'
import { PortableText } from '@portabletext/react'

export default function HeroPostcard({
	pretitle,
	content,
	ctas,
	image,
	aspectRatio,
	containerFullWidth,
	imageWidth,
}: Partial<{
	pretitle: string
	aspectRatio: string
	containerFullWidth: boolean
	imageWidth: any
	content: any
	ctas: Sanity.CTA[]
	image: Sanity.Image & { onRight?: boolean }
}>) {
	return (
		<section
			className={cn(
				'grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-x-12',
				containerFullWidth ? 'p-6' : 'section',
			)}
		>
			<figure
				className={cn(
					'relative aspect-video w-full overflow-hidden',
					aspectRatio,
					image?.onRight && 'md:order-1',
					imageWidth === '2/3' && 'col-span-2',
				)}
			>
				<Img
					image={image}
					loading={image?.loading}
					className="absolute inset-0 h-full w-full object-cover object-center"
				/>
			</figure>

			<div className="richtext [&_:is(h1,h2)]:text-balance">
				<Pretitle className="text-ink/50">{pretitle}</Pretitle>
				<PortableText value={content} />
				<CTAList ctas={ctas} />
			</div>
		</section>
	)
}
