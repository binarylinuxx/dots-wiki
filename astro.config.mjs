// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { loadPackages, pageLink } from './src/lib/plugin-repo.mjs';

// One sidebar entry per package in the official plugin repository, read at
// build time (src/pages/plugins/[id].astro makes the pages).
const pluginPages = (await loadPackages()).map(({ id, manifest }) => ({
	label: manifest.name,
	link: pageLink(id),
	badge: manifest.type === 'theme' ? { text: 'theme', variant: 'note' } : undefined,
}));

// https://astro.build/config
export default defineConfig({
	site: 'https://bshell.zapzig.org',
	integrations: [
		starlight({
			title: 'blxshell',
			description: 'blxshell Vellum: a Material You desktop shell in C++ on vw',
			logo: {
				src: './src/assets/logo.svg',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/binarylinuxx/dots',
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			// Material Design 3 color scheme
			expressiveCode: {
				themes: ['github-dark', 'github-light'],
			},
		sidebar: [
			{
				label: 'Getting Started',
				items: [
					{ label: 'Introduction', slug: 'index' },
					{ label: 'Installation', slug: 'getting-started/installation' },
					{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					{ label: 'Quickshell version (unmaintained)', slug: 'legacy/quickshell' },
					{ label: 'First Steps', slug: 'getting-started/first-steps' },
				],
			},
			{
				label: 'Configuration',
				items: [
					{ label: 'Commands', slug: 'configuration/commands' },
					{ label: 'Login screen', slug: 'components/greeter' },
					{ label: 'Keybindings', slug: 'configuration/keybindings' },
					{ label: 'Theming', slug: 'configuration/theming' },
					{ label: 'Quickshell', slug: 'configuration/quickshell' },
				],
			},
			{
				label: 'Customization',
				items: [
					{ label: 'General', slug: 'customization/colors' },
					{ label: 'Fonts', slug: 'customization/fonts' },
				],
			},
			{
				label: 'Packages',
				items: [
					{ label: 'Packages', slug: 'packages/overview' },
					{ label: 'AUR (Quickshell, archived)', slug: 'packages/aur' },
				],
			},
			{
				label: 'Plugins',
				items: [
					{ label: 'Browse', slug: 'plugins/discover' },
					...(pluginPages.length
						? [{ label: 'All plugins', items: pluginPages }]
						: []),
					{ label: 'Installing', slug: 'plugins/installing' },
					{ label: 'Publishing', slug: 'plugins/publishing' },
				],
			},
		{
			label: 'Troubleshooting',
			items: [
				{ label: 'Common Issues', slug: 'troubleshooting/common-issues' },
				{ label: 'FAQ', slug: 'troubleshooting/faq' },
			],
		},
		{
			label: 'History',
			items: [
				{ label: 'Overview', slug: 'history/overview' },
				{ label: 'v4 Vellum (Nov 2026)', slug: 'history/vellum' },
				{ label: 'v3, last Quickshell (Oct 2026)', slug: 'history/2026-10' },
				{ label: 'v3.0 (May 2026)', slug: 'history/2026-05' },
				{ label: 'v2.5 (Mar 2026)', slug: 'history/2026-03' },
				{ label: 'v2 (Jan 2026)', slug: 'history/2026-01' },
			],
		},
		{
			label: 'Changelog',
			items: [
				{ label: 'v4.0.0 Vellum', slug: 'changelog/4-0-0' },
				{ label: 'v3.0.0', slug: 'changelog/3-0-0' },
				{ label: 'v2.5.0', slug: 'changelog/2-5-0' },
			],
		},
		],
		}),
	],
});
