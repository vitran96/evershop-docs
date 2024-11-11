/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./docs/**/*.md"],
  theme: {
    extend: {
      colors: {
        primary: "#008060",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      padding: {
        DEFAULT: "20px",
        xl: "32px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
