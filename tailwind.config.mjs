/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/preline.js',],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [animations, require('preline/plugin')],
}
