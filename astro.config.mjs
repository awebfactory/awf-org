import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Project Flow & Tracker',
			// favicon in ./public, vite serves as root
			favicon: 'cropped-icon170-192x192.png',
			logo: {
        src: './src/assets/logo.png',
      },
			social: {
				twitter: 'https://x.com/a_web_factory',
				youtube: 'https://www.youtube.com/@awebfactory',
				facebook: 'https://www.facebook.com/AWebFactory',
				github: 'https://github.com/awebfactory',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
