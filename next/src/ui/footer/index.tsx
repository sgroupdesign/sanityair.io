import { getSite } from '@/lib/sanity'
import Social from '@/ui/Social'
import Navigation from './Navigation'

export default async function Footer() {
	const { companyName } = await getSite()

	return (
		<section className="bg-ink text-center text-canvas">
			<div className="section py-8">
				<div className="max-w-screen-2xl space-y-8">
					<Navigation />
					<Social className="justify-center" />
					<p className="text-sm">
						&copy; {companyName} {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</section>
	)
}
