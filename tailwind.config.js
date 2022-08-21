/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'tablet': '640px',
    'laptop': '1024px',
    'desktop': '1280px',},
  },
  plugins: [],
}
