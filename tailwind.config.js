/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Asegúrate de agregar la fuente aquí
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'landing-bg': '#01070F', //
      'landing-blue' : '#050A11',
      'custom-blue': '#00B0FF',
      'blue-card' : '#0a1e2d',
      'blue-icon' : '#103550',
      'border-footer' : '#848184'
    },
  },
  plugins: [],
}

