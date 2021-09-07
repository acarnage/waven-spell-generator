module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

        dropShadow: {
          'blue': '0 0 0 rgba(0, 0, 255, 1)',
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
