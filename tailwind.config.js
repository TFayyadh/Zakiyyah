/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        playfair:['Playfair Display'],
        poppins:['Poppins'],
        inter:['Inter']
      }
    },
  },
  plugins: [],
}

