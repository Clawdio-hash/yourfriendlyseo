// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://www.yourfriendlyseo.com',
	integrations: [mdx(), sitemap({
				filter: (page) => !page.includes('/thank-you'),
	})],
});
