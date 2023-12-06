module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	mode: 'jit',
	theme: {
		extend: {
			screens: {
				rrsm: '315px',
				rsm: '350px',
				mf: '990px',
			},
			backgroundImage: {
				'hero-img': 'url(/src/images/hero-bg.jpg)',
			},
			keyframes: {
				'slide-in': {
					'0%': {
						'-webkit-transform': 'translateX(120%)',
						transform: 'translateX(120%)',
					},
					'100%': {
						'-webkit-transform': 'translateX(0%)',
						transform: 'translateX(0%)',
					},
				},
			},
			animation: {
				'slide-in': 'slide-in 0.5s ease-out',
			},
		},
	},
	variants: {
		extend: {},
	},
};
