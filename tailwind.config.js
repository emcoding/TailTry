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
          light: "#dcdbc9",
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
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
