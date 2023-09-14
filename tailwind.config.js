const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D143B",
        "secondary-dark": "#102D44",
        "ternary-dark": "#252b4e",

        "light-blue": "#3084D6",
        "light-blue-2": "#2b8ef0",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      backgroundColor: {
        "light-blue": "#1666C0",
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
  },
  plugins: ["@tailwindcss/forms"],
};
