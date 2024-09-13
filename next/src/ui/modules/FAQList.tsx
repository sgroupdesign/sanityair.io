import { cn } from '@/lib/utils'
import { PortableText } from '@portabletext/react'

export default function FAQList({
	content,
	centerAligned,
	backgroundColour,
	items,
}: Partial<{
	content: any
	backgroundColour: string
	centerAligned: boolean
	items: {
		question: string
		answer: any
	}[]
}>) {
	return (
		<section
			className={cn('space-y-4', backgroundColour && backgroundColour)}
			itemScope
			itemType="https://schema.org/FAQPage"
		>
			<div className="section max-w-screen-md">
				<header className={cn('richtext', centerAligned && 'text-center')}>
					<PortableText value={content} />
				</header>

				<div className="mx-auto">
					{items?.map(({ question, answer }, key) => (
						<details
							className="accordion border-b border-ink/10"
							itemScope
							itemProp="mainEntity"
							itemType="https://schema.org/Question"
							key={key}
						>
							<summary className="py-4 font-bold" itemProp="name">
								{question}
							</summary>
							<div
								className="anim-fade-to-b pb-4"
								itemScope
								itemProp="acceptedAnswer"
								itemType="https://schema.org/Answer"
							>
								<div className="richtext" itemProp="text">
									<PortableText value={answer} />
								</div>
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	)
}
