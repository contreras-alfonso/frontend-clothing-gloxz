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
        // 'color-principal': '#0d0c22',
        'color-principal': 'rgba(113,99,186,255)',
        'color_principal_hover': '#e0e0e058',
        'color-hover':'#565564',
        'color-amarillo-fuerte':'#ffda79',
        'color_bg':'#ebe9e9',
        'color_texto':'#777777',
        // 'color_bg2':'rgba(113,99,186,255)'
      }
    },
  },
  plugins: [],
}