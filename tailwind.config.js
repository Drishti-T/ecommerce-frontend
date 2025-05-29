/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
        'marquee': "marquee 10s linear infinite",
        'marquee2': "marquee2 10s linear infinite",
        'scroll': 'scroll linear infinite',

      },

      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        integral_cf: ['Integral_cf', 'sans-serif'],
        integral_cf_regular: ['Integral_cf_regular', 'sans-serif'],
        integral_cf_medium: ['Integral_cf_medium', 'sans-serif'],
        integral_cf_bold: ['Integral_cf_bold', 'sans-serif'],
        satoshi_bold: ['Satoshi_Bold', 'sans-serif'],
        satoshi_medium: ['Satoshi_Medium', 'sans-serif'],

      },
      screens: {
        'xs': '418px', // smaller then sm
        'sm_md': '800px', // smaller then md larger than sm
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

