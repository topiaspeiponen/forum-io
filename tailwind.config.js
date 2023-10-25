/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        'base': '700px'
      },
      colors: {
        'primary': '#000000',
        'secondary': 'white',
        'background': '#FFFFFF',
        'on-primary': '#FF4081',
        'on-secondary': '#000000',
        'on-background': '#000000',
        'accent': '#FF6363',
      }
    },
    fontFamily: {
      'sans':  ['OpenSans', 'sans-serif'],
      'serif': ['OpenSans', 'serif'],
      'mono': ['OpenSans', 'monospace'],
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}

