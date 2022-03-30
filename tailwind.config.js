module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			PureWhite: '#FFFFFF',
			Red: '#FC4747',
			DarkBlue: '#10141E',
			GreyishBlue: '#FC4747',
			SemiDarkBlue: '#161D2F',
		},
		extend: {
			fontSize: {
				L: '2rem',
				M: '1.5rem',
				S: '1.5rem',
				XS: '1.125rem',
				BodyM: '0.9375rem',
				BodyS: '0.8125rem',
			},
			fontWeight: {
				Light: '300',
				Medium: '500',
			},
		},
	},
	plugins: [],
};
