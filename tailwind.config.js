/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        'base': '1000px'
      },
      colors: {
        'primary': '#006a69',
        'on-primary': '#ffffff',
        'primary-container': '#6ff7f4',
        'on-primary-container': '#00201f',

        'secondary': '#4a6362',
        'on-secondary': '#ffffff',
        'secondary-container': '#cce8e7',
        'on-secondary-container': '#051f1f',

        'accent': '#4a607c',
        'on-accent': '#ffffff',
        'accent-container': '#d2e4ff',
        'on-accent-container': '#031c35',

        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#410002',

        'background': '#fafdfc',
        'on-background': '#191c1c',
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

