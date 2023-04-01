/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { italianno: ['Italianno', 'sans-serif'] },
      backgroundImage: {
        hero: "url('/src/assets/hero.jpg')",
        newsletter: "url('/src/assets/newsletter.jpg')",
      },
    },
  },

  plugins: [
    // add plugin for line-clamp
    require('@tailwindcss/line-clamp'),
  ],
};
