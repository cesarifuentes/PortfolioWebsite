/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};

// xs: "320px",
// ss: "640px",

// lg: "1328px",
// lg: "1428px",
// xl: "1700px",
