/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    fontFamily: {
      primary: 'Space Grotesk, sans-serif'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem'
      }
    },
    extend: {
      colors: {
        primary: colors.emerald[400]
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    })
  ],
}
