import { cn } from '@/lib/utils'
import CTAList from '@/ui/CTAList'
import Img, { Source } from '@/ui/Img'
import Pretitle from '@/ui/Pretitle'

export default function Hero({
	pretitle,
	content,
	ctas,
	bgImage,
	bgImageMobile,
	bgOverlayOpacity,
	textAlign = 'center',
	alignItems,
}: Partial<{
	title: string
	pretitle: string
	content: any
	ctas: Sanity.CTA[]
	bgImage: Sanity.Image
	bgImageMobile: Sanity.Image
	textAlign: React.CSSProperties['textAlign']
	alignItems: React.CSSProperties['alignItems']
}>) {
	const hasImage = !!bgImage?.asset

	return (
		<section
			className={cn(
				hasImage &&
					'relative grid bg-ink text-canvas *:col-span-full *:row-span-full',
			)}
		>
			{bgImage && (
				<picture>
					<Source image={bgImageMobile} />
					<Img
						className="size-full max-h-fold object-cover"
						image={bgImage}
						draggable={false}
					/>
				</picture>
			)}

			{bgOverlayOpacity && (
				<div
					className={cn('absolute inset-0 bg-black', {
						'opacity-20': bgOverlayOpacity === '20',
						'opacity-40': bgOverlayOpacity === '40',
						'opacity-60': bgOverlayOpacity === '60',
						'opacity-80': bgOverlayOpacity === '80',
						'opacity-100': bgOverlayOpacity === '100',
					})}
				></div>
			)}

			{content && (
				<div className="section flex w-full flex-col">
					<div
						className={cn(
							'richtext relative max-w-2xl [&_:is(h1,h2)]:text-balance',
							{
								'mb-8': alignItems === 'start',
								'my-auto': alignItems === 'center',
								'mt-auto': alignItems === 'end',
							},
							{
								'mr-auto': textAlign === 'left',
								'mx-auto': textAlign === 'center',
							},
						)}
						style={{ textAlign }}
					>
						<Pretitle
							className={cn(hasImage ? 'text-canvas/70' : 'text-ink/50')}
						>
							{pretitle}
						</Pretitle>

						<h2 className="h2">Test</h2>

						<div className="">{content}</div>

						<CTAList
							ctas={ctas}
							className={cn({
								'justify-start': textAlign === 'left',
								'justify-center': textAlign === 'center',
							})}
						/>
					</div>
				</div>
			)}
		</section>
	)
}
