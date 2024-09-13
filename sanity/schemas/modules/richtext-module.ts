import { IoIosImage } from 'react-icons/io'
import { VscSymbolKeyword } from 'react-icons/vsc'
import { defineField, defineType } from 'sanity'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'richtext-module',
	title: 'Richtext module',
	icon: VscSymbolKeyword,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					type: 'image',
					icon: IoIosImage,
					fields: [
						defineField({
							name: 'alt',
							type: 'string',
						}),
						defineField({
							name: 'caption',
							type: 'text',
							rows: 2,
						}),
					],
				},
			],
		}),
		defineField({
			name: 'centerAligned',
			type: 'boolean',
			description:
				'By default the content field is left aligned, enable this for center alignment if required.',
			initialValue: false,
		}),
		defineField({
			name: 'backgroundColour',
			type: 'string',
			options: {
				list: [
					{ title: 'White', value: 'bg-white' },
					{ title: 'Light Grey', value: 'bg-slate-50' },
					{ title: 'Black', value: 'bg-black' },
				],
			},
			initialValue: 'bg-white',
		}),
		defineField({
			name: 'darkMode',
			type: 'boolean',
			description: 'Enable to change the content text colour to white.',
			initialValue: false,
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Richtext module',
		}),
	},
})
