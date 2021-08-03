module.exports = {
  purge: [
    'index.html',
    '**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#2E8B57",
          dark: "#0f766e",
          DEFAULT: "#047857",
        }
      },
      fontFamily: {
        headline: "Catamaran, sans-serif",
        bodycopy: "Inter, sans-serif",
        body: "serif"
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
