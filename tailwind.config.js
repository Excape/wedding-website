const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  plugins: [],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "windmill-theme.js",
  ],
  theme: {
    extend: {
      borderWidth: {
        16: "16px",
      },
      colors: {
        "veg-green": "#93c11f",
        "map-green": "#82A775",
        "map-blue": "#3B727C",
        "map-beige-light": "#D1BE9D",
        "map-beige": "#B9A37E",
        "map-brown": "#64513B",
        "map-red": "#B05F66",
      },
      fontFamily: {
        title: ["Rochester", "cursive"],
        "title-sans": ["Quicksand", "sans-serif"],
      },
      fontSize: {
        "10vw": "10vw",
        "7vw": "7vw",
      },
      minHeight: {
        10: "10rem",
        15: "15rem",
        20: "20rem",
        30: "30rem",
        40: "40rem",
      },
    },
  },
  variants: {
    extend: {},
  },
});
