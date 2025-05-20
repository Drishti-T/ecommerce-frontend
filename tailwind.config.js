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
        integral_cf_regular : ['Integral_cf_regular' , 'sans-serif'],
        integral_cf_medium : ['Integral_cf_medium' , 'sans-serif'],
        integral_cf_bold : ['Integral_cf_bold' , 'sans-serif'],
        satoshi_bold : ['Satoshi_Bold' , 'sans-serif'],
        satoshi_medium : ['Satoshi_Medium' , 'sans-serif'],

      },
      screens : {
        'xs' : '418px' , // smaller then sm
        'sm_md' : '800px' , // smaller then md larger than sm
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

