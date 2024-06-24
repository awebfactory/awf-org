// Generated color palettes
const accent = { 200: '#d9c5af', 600: '#945e0d', 900: '#442d0f', 950: '#30200f' };
const gray = { 100: '#fff5e7', 200: '#ffeacf', 300: '#e9b975', 400: '#ba7d00', 500: '#774f00', 700: '#4e3200', 800: '#372200', 900: '#241500' };
// import colors from 'tailwindcss/colors';

import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};
