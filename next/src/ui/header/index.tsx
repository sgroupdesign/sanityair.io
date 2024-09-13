import { getSite } from '@/lib/sanity'
import { cn } from '@/lib/utils'
import CTAList from '@/ui/CTAList'
import Link from 'next/link'
import SkipToContent from '../SkipToContent'
import css from './Header.module.css'
import Navigation from './Navigation'
import Toggle from './Toggle'
import Wrapper from './Wrapper'

export default async function Header() {
	const { companyName, headerMenu, ctas } = await getSite()

	return (
		<Wrapper className="sticky top-0 z-10 bg-white shadow-sm backdrop-blur">
			<SkipToContent />

			<div
				className={cn(
					css.header,
					'mx-auto grid max-w-screen-2xl items-center gap-x-4 p-4',
				)}
			>
				<div className="[grid-area:logo]">
					<Link className="font-bold" href="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 588.2 217.2"
							className="h-14"
						>
							<path
								d="M247.4 121.9c0 8.9-6.1 15.1-19.3 15.1h-17.9V80.6h16.6c10.1 0 17.9 3.9 17.9 14 0 5.9-3.3 11-9.2 12.8v.2c5.8 1 11.9 5.4 11.9 14.3zm-34.3-15.5h14.6c6.6 0 14.1-2.9 14.1-11.9 0-6.9-4.4-11.1-15.7-11.1h-13zm31.4 15.7c0-8.4-5.9-13-16.8-13H213v25.1h14.5c10.2 0 17-3.7 17-12.1zm46-1.2H262l-6.2 16h-3l21.7-56.3h3.2l21.9 56.3h-3.1zm-1.1-2.7l-13.2-34h-.2l-13 34zm59.6 18.7l-16.9-23.6h-13.9v23.6h-2.8V80.6h18.7c12.4 0 17.7 7 17.7 16.2 0 10.8-7 15.9-16.1 16.5v.1l16.9 23.5zm-30.8-26.3h14.7c11.7 0 16-5.7 16-13.8 0-9.1-5.7-13.4-14.6-13.4h-16.1zm122.2-30l-18.2 56.3H419l-15.4-52.1h-.1l-15.4 52.1H385l-18.2-56.3h3.1l16.6 51.7h.2L402 80.6h3.4l15.2 51.7h.2l16.7-51.7zm17.9 0h2.8v56.3h-2.8zm52 56.6c-15.1 0-27.5-9.9-27.5-28.1 0-16 9.7-28.8 27.5-28.8A26.74 26.74 0 01531.7 91l-2.2 1.8c-5.3-6.7-12.2-9.7-19.2-9.7-15.8 0-24.6 11.2-24.6 26 0 16.3 11 25.3 24.6 25.3 8.7 0 14.7-3.8 19.2-9.5l2.2 1.8c-4.8 6.1-11.5 10.5-21.4 10.5zm52.7-27.9l-10.8 12.5v15.1h-2.8V80.6h2.8v36.9h.1L584 80.6h3.6L565 107.1l23.2 29.9h-3.6l-21.5-27.6-.1-.1zM89.7 178.4a13.4 13.4 0 00-.1-2 33.88 33.88 0 00-4.3-15.1 35.44 35.44 0 00-7.4-9.4 1 1 0 01-.4-.5c-8.4-8-19.7-11.9-33.9-11.9H0v77.7h43.5c14.2 0 25.5-4 33.9-11.9a1 1 0 00.4-.5 35.44 35.44 0 007.4-9.4 33.88 33.88 0 004.3-15.1 10.07 10.07 0 00.2-1.9zm0-139.5a13.4 13.4 0 00-.1-2 33.88 33.88 0 00-4.3-15.1 35.44 35.44 0 00-7.4-9.4 1 1 0 01-.4-.5C69.1 4 57.7 0 43.5 0H0v77.7h43.5c14.2 0 25.5-4 33.9-11.9a1 1 0 00.4-.5 35.44 35.44 0 007.4-9.4 33.88 33.88 0 004.3-15.1 12.25 12.25 0 00.2-1.9zm51.1 60.5l-.9.9a97 97 0 01-10.4 8.4 95.11 95.11 0 0110.3 8.3l.9.9a86 86 0 0115.1 19.1V80.3a80.2 80.2 0 01-15 19.1z"
								fill="#000"
							></path>
						</svg>
					</Link>
				</div>

				<Navigation />

				<CTAList
					className="[grid-area:ctas] max-md:*:w-full max-md:header-closed:hidden md:ml-auto"
					ctas={ctas}
				/>

				<Toggle />
			</div>
		</Wrapper>
	)
}
