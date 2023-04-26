/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/forms'),
		// NOTE: Insert above the 'skeleton.cjs' plugin
	],
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
