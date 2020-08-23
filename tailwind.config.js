module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-3': '#333',
        primary: {
          default: '#338BF0',
          '100': '#F1F7FE',
          '200': '#C1DCFA',
          '300': '#92C1F7',
          '400': '#62A6F3',
          '500': '#338BF0',
          '600': '#1171DF',
          '700': '#0D59AF',
          '800': '#0A4180',
          '900': '#062951',
        },
        secondary: {
          default: '#FA2F4E',
          50: '#FFF5F6',
          100: '#FFEAED',
          200: '#FECBD3',
          300: '#FDACB8',
          400: '#FC6D83',
          500: '#FA2F4E',
          600: '#E12A46',
          700: '#961C2F',
          800: '#711523',
          900: '#4B0E17',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
