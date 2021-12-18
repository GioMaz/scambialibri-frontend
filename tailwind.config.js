module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'gray1': '#F9F9F9',
      'gray2': '#989898',
      'cyan': '#0891B2',
      'green': '#6BB748',
      'red1': '#DA7373',
      'red2': '#9E1010',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
