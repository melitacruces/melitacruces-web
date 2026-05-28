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
        glass: {
          bg: 'rgba(20, 20, 22, 0.4)',
          border: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(40, 40, 44, 0.6)',
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
      animation: {
        'float': 'float 20s infinite alternate cubic-bezier(0.5, 0, 0.5, 1)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(10%, 10%) scale(1.1)' },
          '100%': { transform: 'translate(-5%, -5%) scale(0.9)' },
        }
      }
    },
  },
  plugins: [],
};
