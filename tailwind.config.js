module.exports = {
  purge: {
    content: ['./components/**/*.{js,jsx,tsx}', './pages/**/*.{js,jsx,tsx}'],
    options: {
      whitelist: [
        'text-purple-600',
        'text-pink-600',
        'text-red-600',
        'text-orange-600',
        'text-green-600',
        'text-teal-600',
        'text-blue-600',
        'text-indigo-600',
      ],
    },
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        primary: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      sepia: 'sepia(1)',
      blur: 'blur(40px)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(10px)',
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  plugins: [require('tailwindcss-filters')],
};
