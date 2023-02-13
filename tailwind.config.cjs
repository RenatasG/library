/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './client/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F7EBEB',
          400: '#EED3D3',
          500: '#EAC7C7',
          550: '#E1B1B1',
          600: '#D99B9B',
          700: '#C86E6E',
          900: '#BF5757',
        },
        secondary: {
          500: '#A0C3D2',
        },
        mild: {
          500: '#F7F5EB',
        },
        light: {
          500: '#EAE0DA',
        },
      },
    },
  },
  plugins: [],
};
