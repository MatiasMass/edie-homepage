/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 220, 0, 0.3)',
      },
      backgroundColor: {
        'myBackgroundColor': '#E0E0E0',
      },
      colors: {
        'my-color-text': '#828282',
      },
      fontFamily: {
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
        'heebo': ['Heebo', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}