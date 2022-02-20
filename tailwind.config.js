module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      cursive: ["Cedarville Cursive", "cursive"],
    },
    screens: {
      customMd: "920px",
      // => @media (min-width: 919px) { ... }
      footerGrid: "768px",
      desktop: "1200px",
      footerMd: "1160px",
    },
    extend: {
      colors: {
        pinky: "#ea4c89",
      },
    },
  },
  plugins: [require("daisyui")],
};
