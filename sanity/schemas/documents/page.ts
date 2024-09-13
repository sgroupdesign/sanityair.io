import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	groups: [
		{
			name: 'content',
		},
		{
			name: 'options',
		},
		{
			name: 'SEO',
		},
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'pageDescription',
			type: 'text',
			description:
				'This description is used when a card is created based upon this page',
			rows: 3,
			group: 'content',
		}),
		defineField({
			name: 'modules',
			type: 'array',
			of: [
				{ type: 'blog-rollup' },
				{ type: 'custom-html' },
				{ type: 'faq-list' },
				{ type: 'gallery' },
				{ type: 'hero' },
				{ type: 'hero.postcard' },
				{ type: 'logo-list' },
				{ type: 'richtext-module' },
				{ type: 'stat-list' },
				{ type: 'testimonial-list' },
			],
			group: 'content',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'SEO',
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'metadata.slug.current',
			media: 'metadata.image',
		},
		prepare: ({ title, slug }) => ({
			title,
			subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
		}),
	},
})
