/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        integral_cf : ['Integral_cf' , 'sans-serif'],
        satoshi_bold : ['Satoshi_Bold' , 'sans-serif'],
        satoshi_medium : ['Satoshi_Medium' , 'sans-serif'],

      },
      screens : {
        'xs' : '418px' , // smaller then sm
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

