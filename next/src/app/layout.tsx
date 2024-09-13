import Footer from '@/ui/footer'
import Header from '@/ui/header'
// import { GoogleTagManager } from '@next/third-parties/google'
import '@/styles/app.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="bg-canvas text-ink">
				<Header />
				<main id="main-content" className="" tabIndex={-1}>
					{children}
				</main>
				<Footer />
			</body>
			{/* <GoogleTagManager gtmId='' /> */}
		</html>
	)
}
