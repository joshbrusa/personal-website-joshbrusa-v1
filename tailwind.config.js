/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bangers: ["Bangers", "cursive"],
      },
      colors: {
        "theme-bg": "#fdfdfc",
        theme: "#ff4040",
      },
    },
  },
  plugins: [],
};
