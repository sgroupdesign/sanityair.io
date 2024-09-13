import { TfiLayoutMediaLeft } from 'react-icons/tfi'
import { defineField, defineType } from 'sanity'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'hero.postcard',
	title: 'Hero (postcard)',
	icon: TfiLayoutMediaLeft,
	type: 'object',
	groups: [
		{ name: 'content', title: 'Content', default: true },
		{ name: 'options', title: 'Options' },
	],
	fields: [
		defineField({
			name: 'pretitle',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			group: 'content',
		}),
		defineField({
			name: 'mediaType',
			type: 'string',
			options: {
				list: [
					{ title: 'Image', value: 'image' },
					{ title: 'Video', value: 'video' },
				],
			},
			initialValue: 'image',
			group: 'options',
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
			},
			hidden: ({ parent }) => parent.mediaType != 'image',
			group: 'content',
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				}),
				defineField({
					name: 'onRight',
					type: 'boolean',
					initialValue: false,
				}),
				defineField({
					name: 'loading',
					type: 'string',
					options: {
						layout: 'radio',
						list: ['lazy', 'eager'],
					},
					initialValue: 'lazy',
				}),
				defineField({
					name: 'imageWidth',
					type: 'string',
					options: {
						list: [
							{ title: '1/3', value: 'grid-cols-3 col-span-2' },
							{ title: '1/2', value: 'grid-cols-2' },
							{ title: '2/3', value: 'grid-cols-3 col-span-2' },
						],
					},
					group: 'options',
				}),
			],
		}),
		defineField({
			name: 'aspectRatio',
			type: 'string',
			options: {
				list: [
					{ title: '16x9', value: 'aspect-video' },
					{ title: '1x1', value: 'aspect-square' },
					{ title: '4x3', value: 'aspect-4x3' },
				],
			},
			initialValue: '16x9',
			group: 'options',
		}),
		defineField({
			name: 'containerFullWidth',
			type: 'boolean',
			description: 'Use the full container width by enabling this field.',
			initialValue: false,
			group: 'options',
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'image.asset',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Hero (postcard)',
			media,
		}),
	},
})
