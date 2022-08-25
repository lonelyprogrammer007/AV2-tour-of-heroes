/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors,
    },
    colors: {
      "custom-color-1": "rgba(0, 0, 0, 0.2)",
      "custom-purple": "#673ab7",
    },
  },
  plugins: [],
};
