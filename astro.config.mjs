// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bshell.zapzig.org',
	integrations: [
		starlight({
			title: 'blxshell',
			description: 'Material Design 3 Hyprland rice with Quickshell',
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
					{ label: 'First Steps', slug: 'getting-started/first-steps' },
				],
			},
			{
				label: 'Configuration',
				items: [
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
					{ label: 'Overview', slug: 'packages/overview' },
					{ label: 'AUR Publishing', slug: 'packages/aur' },
				],
			},
			{
				label: 'Troubleshooting',
				items: [
					{ label: 'Common Issues', slug: 'troubleshooting/common-issues' },
					{ label: 'FAQ', slug: 'troubleshooting/faq' },
				],
			},
		],
		}),
	],
});
