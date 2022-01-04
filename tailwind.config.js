module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '96': '24rem',
        '128': '32rem',
      },
      colors: {
        'primary': '#0891b2',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
