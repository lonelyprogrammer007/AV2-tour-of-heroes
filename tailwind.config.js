/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: { colors },
    colors: {
      activatedNavItem: "rgba(0, 0, 0, 0.2)",
    },
  },
  plugins: [],
};
