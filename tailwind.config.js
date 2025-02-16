/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,ts}",],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "serif"]
      },
      backgroundColor: {
        primary: {
          blue: 'hsl(246, 80%, 60%)',
          work: 'hsl(15, 100%, 70%)',
          play: 'hsl(195, 74%, 62%)',
          study: 'hsl(348, 100%, 68%)',
          exercise: 'hsl(145, 58%, 55%)',
          social: 'hsl(264, 64%, 52%)',
          selfcare: 'hsl(43, 84%, 65%)'
        }
      },
    },
    fontWeight: {
      'thin': 300,
      'normal': 400,
      'more': 500
    },
    colors: {
      very_dark_blue: 'hsl(226, 43%, 10%)',
      dark_blue: 'hsl(235, 46%, 20%)',
      desaturated_blue: 'hsl(235, 45%, 61%)',
      pale_blue: 'hsl(236, 100%, 87%)',
    }
  },
  plugins: [],
};
