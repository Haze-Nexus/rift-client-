/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rift: {
          purple: '#9333ea',
          pink: '#db2777',
          dark: '#0d0d0f',
        }
      }
    },
  },
  plugins: [],
}