const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: 'transparent',
      primary: {
        DEFAULT: '#471786',
        dark: '#240c45',
      },
      secondary: '#eb8f16',
    },
    extend: {
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
