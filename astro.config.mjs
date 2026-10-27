// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://www.yourfriendlyseo.com',
	// /templates is the canonical SEO Audit Template Bundle landing page.
	// Redirect it to the existing product page to avoid duplicate content.
	redirects: {
		'/templates': '/products/seo-audit-template-bundle',
	},
	integrations: [mdx(), sitemap({
				filter: (page) => !page.includes('/thank-you'),
	})],
});
