import { GoNumber } from 'react-icons/go'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { count, getBlockText } from '../../src/utils'

export default defineType({
	name: 'stat-list',
	title: 'Stat list',
	icon: GoNumber,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'stats',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'value',
							type: 'string',
						}),
						defineField({
							name: 'text',
							type: 'string',
						}),
					],
					preview: {
						select: {
							title: 'value',
							subtitle: 'text',
						},
					},
				}),
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
	],
	preview: {
		select: {
			content: 'content',
			stats: 'stats',
		},
		prepare: ({ content, stats }) => ({
			title: getBlockText(content) || count(stats, 'stat'),
			subtitle: 'Stat list',
		}),
	},
})
