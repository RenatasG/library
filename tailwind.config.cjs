/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ['./index.html', './client/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#EAC7C7',
        },
        secondary: {
          500: '#A0C3D2',
        },
        mild: {
          500: '#F7F5EB',
        },
      },
    },
  },
  plugins: [],
};
