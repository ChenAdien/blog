const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        gray: colors.neutral, // TODO: Remove ts-ignore after tw types gets updated to v3
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};

