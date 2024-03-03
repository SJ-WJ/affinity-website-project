/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'mint-green': '#C2E7D9', // a very light greenish-blue
        'marian-blue': '#26408B', // a deep blue
        'fawn': '#E7A977', // a light orange
        'rose-taupe': '#885053', // a muted red
        'light-blue': '#A6CFD5', // a light teal
        'dutch-wine': '#EFE1BE' // a pale, muted shade of yellow with hints of beige and gray
      },
    },
  },
  plugins: [],
}

