import { cn } from '@/lib/utils'
import Img from '@/ui/Img'

export default function Gallery({
	images,
	containerFullWidth,
	aspectRatio,
	columns,
}: Partial<{
	containerFullWidth: boolean
	images: {
		type: Sanity.Image
	}[]
	aspectRatio: string
	columns: number
}>) {
	return (
		<section
			className={cn(
				'grid grid-cols-1 items-center justify-center gap-8 md:gap-x-12',
				containerFullWidth ? 'p-6' : 'section',
				columns ? 'md:grid-cols-' + columns : '',
			)}
		>
			{images?.map((image, key) => (
				<div className={cn('relative w-full overflow-hidden', aspectRatio)}>
					<Img
						image={image}
						loading="lazy"
						className="absolute inset-0 h-full w-full object-cover object-center"
					/>
				</div>
			))}
		</section>
	)
}
