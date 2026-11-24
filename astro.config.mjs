// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
	site: 'https://bshell.zapzig.org',
	integrations: [
		starlight({
			title: 'blxshell',
			// Our own 404 sends old /plugins/<id>/ links to the live plugin page.
			disable404Route: true,
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
				// Code sits on the site's own surfaces, not the themes' blue-grey.
				styleOverrides: {
					codeBackground: 'var(--sl-color-gray-6)',
					borderColor: 'var(--sl-color-gray-5)',
					borderRadius: '10px',
					codeFontFamily: "'JetBrains Mono', ui-monospace, monospace",
					codeFontSize: '0.875rem',
					frames: {
						shadowColor: 'transparent',
						editorTabBarBackground: 'var(--sl-color-gray-6)',
						terminalTitlebarBackground: 'var(--sl-color-gray-6)',
						terminalBackground: 'var(--sl-color-gray-6)',
						inlineButtonBorder: 'transparent',
						editorActiveTabBackground: 'var(--sl-color-gray-5)',
						editorActiveTabIndicatorTopColor: 'var(--sl-color-accent)',
						editorActiveTabIndicatorBottomColor: 'transparent',
						editorTabBarBorderBottomColor: 'var(--sl-color-gray-5)',
					},
				},
				// Shell snippets are plain blocks, not pretend terminal windows.
				defaultProps: {
					overridesByLang: {
						'bash,sh,shell,shellscript,zsh,fish,console': { frame: 'none' },
					},
				},
			},
		sidebar: [
			{
				label: 'Start',
				items: [
					{ label: 'Introduction', slug: 'index' },
					{ label: 'Installation', slug: 'getting-started/installation' },
					{ label: 'Packages', slug: 'packages/overview' },
				],
			},
			{
				label: 'The shell',
				items: [
					{ label: 'Bar', slug: 'components/bar' },
					{ label: 'Launcher', slug: 'components/launcher' },
					{ label: 'Dashboard', slug: 'components/dashboard' },
					{ label: 'Notifications and sidebar', slug: 'components/notifications' },
					{ label: 'Settings', slug: 'components/settings' },
					{ label: 'Wallpapers and colours', slug: 'components/wallpapers' },
					{ label: 'Login screen', slug: 'components/greeter' },
				],
			},
			{
				label: 'Configuration',
				items: [{ label: 'Commands', slug: 'configuration/commands' }],
			},
			{
				label: 'Plugins',
				items: [
					{ label: 'Browse', slug: 'plugins/discover' },
					{ label: 'Installing', slug: 'plugins/installing' },
					{ label: 'Publishing', slug: 'plugins/publishing' },
				],
			},
			{
				label: 'History',
				collapsed: true,
				items: [
					{ label: 'Overview', slug: 'history/overview' },
					{ label: 'v4 Vellum (Nov 2026)', slug: 'history/vellum' },
					{ label: 'v3, last Quickshell (Oct 2026)', slug: 'history/2026-10' },
					{ label: 'v3.0 (May 2026)', slug: 'history/2026-05' },
					{ label: 'v2.5 (Mar 2026)', slug: 'history/2026-03' },
					{ label: 'v2 (Jan 2026)', slug: 'history/2026-01' },
					{ label: 'Changelog v4.0.0', slug: 'changelog/4-0-0' },
					{ label: 'Changelog v3.0.0', slug: 'changelog/3-0-0' },
					{ label: 'Changelog v2.5.0', slug: 'changelog/2-5-0' },
				],
			},
			{
				// Everything that documents the Quickshell version, kept for its users.
				label: 'Quickshell (archived)',
				collapsed: true,
				items: [
					{ label: 'What changed', slug: 'legacy/quickshell' },
					{ label: 'Installation', slug: 'legacy/quickshell-install' },
					{ label: 'Quick start', slug: 'getting-started/quick-start' },
					{ label: 'First steps', slug: 'getting-started/first-steps' },
					{ label: 'Keybindings', slug: 'configuration/keybindings' },
					{ label: 'Theming', slug: 'configuration/theming' },
					{ label: 'Hyprland', slug: 'configuration/hyprland' },
					{ label: 'Quickshell config', slug: 'configuration/quickshell' },
					{ label: 'Colours', slug: 'customization/colors' },
					{ label: 'Fonts', slug: 'customization/fonts' },
					{ label: 'Widgets', slug: 'customization/widgets' },
					{ label: 'Window rules', slug: 'customization/window-rules' },
					{ label: 'AUR packages', slug: 'packages/aur' },
					{ label: 'Common issues', slug: 'troubleshooting/common-issues' },
					{ label: 'FAQ', slug: 'troubleshooting/faq' },
				],
			},
		],
		}),
	],
});
