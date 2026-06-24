/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808", // Almost black
        foreground: "#f3f4f6", // Light gray
        blue: {
          light: '#93c5fd',
          DEFAULT: '#3b82f6',
        },
        panel: {
          bg: '#141417',
          border: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
