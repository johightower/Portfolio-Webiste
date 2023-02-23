/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#191624',
        honey: '#EBAF4C',
        salmon: '#E68584',
        phlato: '#133827',
        ivory: '#FFFFF0',
      },
      width: {
        collage: '1200px',
        passport: '900px',
        ticket: '1100px'
      },
      height: {
        passport: '125vh',
      },
      borderWidth: {
        '10': '10px',
        '12': '12px',
      },
      spacing: {
        'barcode': '54em'
      },
      rotate: {
        '115': '115deg',
        '80': '80deg',
        '70': '70deg',
        '60': '60deg',
      },
    },
  },
  plugins: [],
}
