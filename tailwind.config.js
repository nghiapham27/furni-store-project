/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { italianno: ['Italianno', 'sans-serif'] },
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')",
      },
    },
  },

  plugins: [
    // add plugin for line-clamp
    require('@tailwindcss/line-clamp'),
  ],
};
