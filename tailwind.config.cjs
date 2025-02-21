/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif']
      },
      /**TODO change or delete before pushing */
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
    variants: {
      extend: {}
    },
  },
  plugins: [],
}
