/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			dropShadow: {
				'light': '5px 5px 18px #6ee7b7',
				'dark': '5px 5px 18px #022c22'
			  }
		},
	},
	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}
