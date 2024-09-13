import { cn } from '@/lib/utils'
import { PortableText } from 'next-sanity'
import AnchoredHeading from './AnchoredHeading'
import Image from './Image'

export default function RichtextModule({
	content,
	headings,
	darkMode,
	centerAligned,
	backgroundColour,
}: Partial<{
	content: any
	centerAligned: boolean
	darkMode: boolean
	backgroundColour: string
	headings: {
		style: string
		text: string
	}[]
}>) {
	return (
		<section className={cn('space-y-4', backgroundColour && backgroundColour)}>
			<div className="section grid max-w-screen-md gap-8 md:grid-cols-[1fr,auto]">
				<div
					className={cn(
						'richtext mx-auto w-full [&>:not(:first-of-type)]:!mt-[1em]',
						{
							'text-center': centerAligned,
						},
						{
							'text-white': darkMode,
						},
					)}
				>
					<PortableText
						value={content}
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
		</section>
	)
}
