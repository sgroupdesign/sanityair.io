// documents
import blogCategory from './documents/blog.category'
import blogPost from './documents/blog.post'
import logo from './documents/logo'
import navigation from './documents/navigation'
import page from './documents/page'
import redirect from './documents/redirect'
import site from './documents/site'
import testimonial from './documents/testimonial'

// objects
import cta from './objects/cta'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'

// modules
import blogRollup from './modules/blog-rollup'
import customHtml from './modules/custom-html'
import faqList from './modules/faq-list'
import gallery from './modules/gallery'
import hero from './modules/hero'
import heroPostcard from './modules/hero.postcard'
import logoList from './modules/logo-list'
import richtextModule from './modules/richtext-module'
import statList from './modules/stat-list'
import testimonialList from './modules/testimonial-list'

export const schemaTypes = [
	// documents
	site,
	navigation,
	page,
	redirect,
	blogPost,
	blogCategory,
	logo,
	testimonial,

	// objects
	cta,
	link,
	linkList,
	metadata,

	// modules
	blogRollup,
	customHtml,
	faqList,
	gallery,
	hero,
	heroPostcard,
	logoList,
	richtextModule,
	statList,
	testimonialList,
]
