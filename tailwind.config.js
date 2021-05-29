const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: colors.orange,
				teal: colors.teal,
				'light-blue': colors.lightBlue,
				'blue-gray': colors.blueGray,
				cyan: colors.cyan,
				'light-blue': colors.lightBlue,
			},
			fontFamily: {
				nunito: ['Nunito'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
