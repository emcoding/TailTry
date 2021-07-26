module.exports = {
  purge: [
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#2E8B57",
          DEFAULT: "#0f766e",
          dark: "#047857",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
