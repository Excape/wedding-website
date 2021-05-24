module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  plugins: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        16: '16px',
      },
      colors: {
        'veg-green': '#93c11f',
      },
      fontFamily: {
        title: ['Rochester', 'cursive'],
        'title-sans': ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        '10vw': '10vw',
        '7vw': '7vw',
      },
      minHeight: {
        30: '30rem',
        45: '45rem',
      },
    },
  },
  variants: {
    extend: {},
  },
};
