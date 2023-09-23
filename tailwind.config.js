/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      cabin: ['Cabin', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

