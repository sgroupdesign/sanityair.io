'use client'

import { client } from '@/lib/sanity'
import {
	useNextSanityImage,
	type UseNextSanityImageOptions,
} from 'next-sanity-image'
import Image, { type ImageProps } from 'next/image'

export default function Img({
	image,
	imageWidth,
	alt = '',
	options,
	...props
}: {
	image?: Sanity.Image
	imageWidth?: number
	alt?: string
	options?: UseNextSanityImageOptions
} & Omit<ImageProps, 'src' | 'alt'>) {
	if (!image) return null

	const imageProps = useNextSanityImage(
		client,
		image,
		imageWidth ? { imageBuilder: (b) => b.width(imageWidth) } : options,
	)

	return (
		<Image
			{...imageProps}
			alt={image.alt || alt}
			loading={image.loading || 'lazy'}
			unoptimized
			{...props}
		/>
	)
}

export function Source({
	image,
	imageWidth,
	options,
	media = '(max-width: 768px)',
}: {
	image?: Sanity.Image
	imageWidth?: number
	options?: UseNextSanityImageOptions
	media?: string
}) {
	if (!image) return null

	const { src, ...imageProps } = useNextSanityImage(
		client,
		image,
		imageWidth ? { imageBuilder: (b) => b.width(imageWidth) } : options,
	)

	return <source srcSet={src} {...imageProps} media={media} />
}
