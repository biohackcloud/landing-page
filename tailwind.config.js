/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        highlight: "#576128",
        gray: "#DBDBDB",
      },
      textColor: {
        main: "#565D51",
      },

      fontSize: {
        h4: ["1.5em", "1.5em"],
        h2: ["2em", "2em"],
        h1: "2.5em",
      },
    },
  },
  plugins: [],
};
