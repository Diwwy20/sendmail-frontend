/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aqua: "#7bbeeb",
        dark: {
          light: "#5A7184",
          hard: "#0D2436",
          soft: "#183B56"
        },
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}