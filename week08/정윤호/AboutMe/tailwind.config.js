// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yangjin: ["'양진체'", "sans-serif"],
        aggro: ["'SBAggroB'", "sans-serif"]
      },
      backgroundColor: {
        'sky-custom': 'rgb(218, 246, 255)'
      }
    },
  },
  plugins: [],
}