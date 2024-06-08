/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts}",],
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          blue: 'hsl(246, 80%, 60%)',
          lightred: 'hsl(15, 100%, 70%)',
          softblue: 'hsl(195, 74%, 62%)',
          lightred: 'hsl(348, 100%, 68%)',
          limegreen: 'hsl(145, 58%, 55%)',
          violet: 'hsl(264, 64%, 52%)',
          softorange: 'hsl(43, 84%, 65%)'
        }
      },
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
