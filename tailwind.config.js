/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { italianno: ['Italianno', 'sans-serif'] },
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
};
