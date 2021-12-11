module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'gray-10': '#F9F9F9',
      'gray-20': '#989898',
      'cyan': '#0891B2',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
