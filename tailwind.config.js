/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-main': '#0057ad'
      },
      backgroundImage: {
        'bright-gradient': 'linear-gradient(355deg, #ffb8d4 -20%, #0070e0 100%, #0070e0 0)'
      },
    },
  },
  plugins: [],
}
