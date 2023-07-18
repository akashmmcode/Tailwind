/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Racing Sans One", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#5555ff",
      },
    },
  },
  plugins: [],
};
