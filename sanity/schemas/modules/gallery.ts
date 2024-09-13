import { GoFileMedia } from 'react-icons/go'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'gallery',
	icon: GoFileMedia,
	type: 'object',
	groups: [
		{ name: 'content', title: 'Content', default: true },
		{ name: 'options', title: 'Options' },
	],
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'images',
			type: 'array',
			of: [{ type: 'image' }],
			group: 'content',
		}),
		defineField({
			name: 'centerAligned',
			type: 'boolean',
			description:
				'By default the content field is left aligned, enable this for center alignment if required.',
			initialValue: false,
			group: 'options',
		}),
		defineField({
			name: 'backgroundColour',
			type: 'string',
			options: {
				list: [
					{ title: 'White', value: 'bg-white' },
					{ title: 'Light Grey', value: 'bg-slate-50' },
					{ title: 'Black', value: 'black' },
				],
			},
			initialValue: 'bg-white',
			group: 'options',
		}),
		defineField({
			name: 'layout',
			type: 'string',
			options: {
				list: [
					{ title: 'Carousel', value: 'carousel' },
					{ title: 'Gallery', value: 'gallery' },
				],
			},
			initialValue: 'bcarousel',
			group: 'options',
		}),
		defineField({
			name: 'containerFullWidth',
			type: 'boolean',
			description: 'Use the full container width by enabling this field.',
			initialValue: false,
			group: 'options',
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
			name: 'columns',
			type: 'number',
			initialValue: 3,
			group: 'options',
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: 'Gallery',
		}),
	},
})
