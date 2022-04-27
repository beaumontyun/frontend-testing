module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    letterSpacing: {
      tight: '-.015em'
    },
    extend: {
      height: {
        'half-screen': '50vh'
      },
      flex: {
        '100': '0 0 100%'
      }
    },
  },
  plugins: [],
}
