import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'hero',
	title: 'Hero',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	groups: [
		{ name: 'content', title: 'Content', default: true },
		{ name: 'options', title: 'Options' },
		{ name: 'image', title: 'Image' },
	],
	fieldsets: [
		{ name: 'image', title: 'Image', options: { columns: 2 } },
		{ name: 'alignment', title: 'Alignment', options: { columns: 2 } },
	],
	fields: [
		defineField({
			name: 'pretitle',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'title',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'content',
			type: 'string',
			rows: '3',
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
			name: 'textAlign',
			type: 'string',
			options: {
				layout: 'radio',
				list: ['left', 'center'],
			},
			initialValue: 'center',
			group: 'options',
			fieldset: 'alignment',
		}),
		defineField({
			name: 'alignItems',
			title: 'Vertical alignment',
			type: 'string',
			options: {
				layout: 'radio',
				list: [
					{ title: 'Top', value: 'start' },
					'center',
					{ title: 'Bottom', value: 'end' },
				],
			},
			initialValue: 'center',
			group: 'options',
			fieldset: 'alignment',
		}),
		defineField({
			name: 'bgImage',
			title: 'Background image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
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
			],
			fieldset: 'image',
			group: 'image',
		}),
		defineField({
			name: 'bgImageMobile',
			title: 'Background image (mobile)',
			type: 'image',
			options: {
				hotspot: true,
			},
			fieldset: 'image',
			group: 'image',
		}),
		defineField({
			name: 'bgOverlayOpacity',
			type: 'string',
			options: {
				list: [
					{ title: '20%', value: '20' },
					{ title: '40%', value: '40' },
					{ title: '60%', value: '60' },
					{ title: '80%', value: '80' },
					{ title: '100%', value: '100' },
				],
			},
			fieldset: 'image',
			group: 'image',
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'bgImage',
		},
		prepare: ({ title, media }) => ({
			title: title,
			subtitle: 'Hero',
			media,
		}),
	},
})
