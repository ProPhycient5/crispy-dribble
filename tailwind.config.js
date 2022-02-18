module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "pinky": "#ea4c89",
      },
    },
  },
  plugins: [require("daisyui")],
};
