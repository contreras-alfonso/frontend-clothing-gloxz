/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-amarillo':'#f8f7f4',
        'color-principal': '#0d0c22',
        'color-hover':'#565564',
        'color-amarillo-fuerte':'#ffda79',
        'color_bg':'#ebe9e9'
      }
    },
  },
  plugins: [],
}