/** @type {import('tailwindcss').Config} */
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
        'primary': '#FF6363',
        'secondary': 'white',
        'background': '#FFFFFF',
        'text-on-primary': '#FFFFFF',
        'text-on-secondary': '#000000',
        'text-on-background': '#000000',
        'accent': '#FF6363',
      }
    },
  },
  plugins: [],
}

