/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0e0f17",
        lightPrimary: "#313652",
        purplePrimary: "#201f3bc0",
        whitePrimary: "#40495e",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        purple: "#800080",
        indigo: "#4B0082",
        backgroundImage: "radial-gradient(rgba(98, 0, 255, 0.485) 0.6px, #1B1F29 0.5px)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

