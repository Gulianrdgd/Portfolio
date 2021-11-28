const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/api/*.ts',
    './pages/*.tsx',

  ],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      margin: {
        '014': '14%',
        '025': '25%'
      },
      width: {
        '6/10': '60%'
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: "#0085FF",
      },
      zIndex: {
        '1':'-1'
      },
      fontFamily: {
        sans: ['Chakra Petch', 'sans-serif'],
        light: ['Chakra Petch Light'],
        medium: ['Chakra Petch Medium'],
        semiBold: ['Chakra Petch SemiBold']
      },
    }
  }
}
