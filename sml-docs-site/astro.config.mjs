import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	// Configure `remark-math` and `rehype-mathjax` plugins:
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	},
	integrations: [
		starlight({
			favicon: '/public/favicon.svg',
			title: 'SML-Docs',
			customCss: ['./src/mathjax.css'],
			social: {
				github: 'https://github.com/Neq141/SML-Lib',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'How To Use The Library', link: '/guides/example/' },
					],
				},
				{
					label: 'Docs',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
