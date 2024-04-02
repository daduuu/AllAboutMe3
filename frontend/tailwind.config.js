/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Cormorant Garamond"', 'sans-serif']
    },
    fontWeight: {
      medium : "500"
    },
    extend: {
      backgroundImage: {
        'code': "url('/src/assets/code.png')",
      },
    },
  },
  plugins: [],
});
