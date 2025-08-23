/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		'top-[-20%]',
		'right-[-20%]',
		'bottom-[-20%]',
		'left-[-20%]',
		'from-blue-600/40',
		'to-purple-600/40',
		'from-pink-500/30',
		'to-red-500/30',
	],
};
// This configuration file sets up Tailwind CSS for a Next.js project, specifying where to look for class names and extending the default theme if needed.
// It includes paths to the app and components directories to ensure Tailwind can purge unused styles effectively
