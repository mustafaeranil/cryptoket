module.exports = {
  content: ["./src/**/*.vue", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#DA18A3",
          200: "#EB1484",
          300: "#C81CC5"
        },
        grey: {
          100: "#E3E1E3",
          200: "#888888",
          300: "#4F4F4F"
        },
        dark: {
          bg: "#24252D",
          100: "#2D2E36",
          200: "#1B1A21",
          300: "#2A2D3A",
          400: "#24252D"
        }
      },
      borderRadius: {
        "2.5xl": "20px"
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"]
      }
    }
  },
  plugins: []
}
