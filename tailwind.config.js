/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-black': '#141414',
        'netflix-dark-gray': '#181818',
        'netflix-gray': '#B3B3B3',
        'netflix-light-gray': '#E5E5E5',
        'netflix-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

