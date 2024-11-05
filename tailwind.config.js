/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    fontFamily:{
      fontRegular:["roboto-Regular"],
      fontBold:["roboto-bold"]
    },
  },
  plugins: [ require('daisyui')],
}

