/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          candal: ['Candal'],
      },
      colors:{
        hijau: 'rgb(215, 245, 220)',
        hmuda: 'rgb(250, 255, 251)',
        hfont: 'rgb(32, 177, 90)',
        hitam: 'rgb(0 0 0)',
        orange: 'rgb(245, 95, 29)',
        putih: 'rgb(255,255,255)',
        hijau2: 'rgb(32, 177, 90)',
      },
      spacing: {
        '5rem': '5rem',
        '60vh': '60vh',
        '40vh': '40vh',
        '85vh': '85vh',
        '95vw': '95vw',
      },
    },
  },
  plugins: [],
}

