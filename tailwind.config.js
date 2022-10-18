/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./code/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('images/search.png')",
      },
    },
  },
  plugins: [],
}
