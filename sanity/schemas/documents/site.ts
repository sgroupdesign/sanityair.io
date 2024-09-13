import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	fieldsets: [
		{ name: 'navigation', title: 'Navigation', options: { columns: 2 } },
	],
	fields: [
		defineField({
			name: 'companyName',
			type: 'string',
		}),
		defineField({
			name: 'logo',
			description: '',
			type: 'image',
		}),
		defineField({
			name: 'footerLogo',
			description: '',
			type: 'image',
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			validation: (Rule) => Rule.max(2),
		}),
		defineField({
			name: 'headerMenu',
			type: 'reference',
			to: [{ type: 'navigation' }],
			fieldset: 'navigation',
		}),
		defineField({
			name: 'footerMenu',
			type: 'reference',
			to: [{ type: 'navigation' }],
			fieldset: 'navigation',
		}),
		defineField({
			name: 'social',
			type: 'reference',
			to: [{ type: 'navigation' }],
			fieldset: 'navigation',
		}),
		defineField({
			name: 'ogimage',
			title: 'Open Graph Image (global)',
			description: 'Used for social sharing previews',
			type: 'image',
		}),
	],
})
