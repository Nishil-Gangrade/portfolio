/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        snell: ['Snell Roundhand', 'cursive'],
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        body: { fontFamily: theme('fontFamily.sans') },
      });
    },
  ],
  content: ["./src/**/*.{html,js}"],
}

