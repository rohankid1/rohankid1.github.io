// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://rohankid1.github.io",
	integrations: [
		starlight({
			logo: {
				src: "./public/logo.png"
			},
			customCss: [
				'./src/styles/colours.css',
			],
			title: 'Rosktop',
			social: {
				github: 'https://github.com/rohankid1/cachy-dotfiles',
				discord: 'https://discord.gg/WxHgdFD',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Configuration',
					autogenerate: { directory: 'configuration' },
				},
			],
		}),
	],
});
