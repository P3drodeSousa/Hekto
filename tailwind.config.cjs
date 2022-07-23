/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FB2E86",
        red: "#FB2448",
        blue: "#2F1AC4",
        OffNavyBlue: "#3F509E",
        navyblue: "#151875",
        skyBlue: "rgba(243, 249, 255, 1)",
        pantonePurple: "#E0D3F5",
        purple: "#7E33E0",
        offPurple: "#9F63B5",
        offBlue: "#151875",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
