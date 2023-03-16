/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:
      {
        primary:     '#026467',
        secondary:   '#E5F5EA',
        bodyText:    '#596392',
        navbarFooter:'#F9F9F9'
      },
      fontFamily: {
       fontcin: ['Cinzel', 'serif']
      }
    },
  },
  plugins: [],
}
