import { VscEdit } from 'react-icons/vsc'
import { defineField, defineType } from 'sanity'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'blog-rollup',
	title: 'Blog rollup',
	icon: VscEdit,
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
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
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
			name: 'layout',
			type: 'string',
			options: {
				list: ['grid', 'carousel'],
				layout: 'radio',
			},
			initialValue: 'carousel',
			group: 'options',
		}),
		defineField({
			name: 'limit',
			type: 'number',
			validation: (Rule) => Rule.min(1).integer(),
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
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Blog rollup',
		}),
	},
})
