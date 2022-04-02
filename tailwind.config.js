module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				PureWhite: '#FFFFFF',
				Red: '#FC4747',
				DarkBlue: '#10141E',
				GreyishBlue: '#5A698F',
				SemiDarkBlue: '#161D2F',
			},
			fontSize: {
				L: '2rem',
				M: '1.5rem',
				S: '1.5rem',
				XS: '1.25rem',
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
