/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans], //custom added font
      },
      colors: {
        primary: "#5555ff",
      },
      height: {
        13: "3.25rem", //custom added spacing
      },
    },
  },
  plugins: [],
};
