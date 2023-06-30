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
        "highlight-lighter": "#7F8C2F",
        gray: "#DBDBDB",
        lightgray: "#F5F5F5",
        info: {
          100: "#e3f5fa",
          200: "#c7ebf5",
          900: "#1f2526",
        },
        warning: {
          100: "#fcf8eb",
          200: "#f8efc3",
          900: "#21201e",
        },
        success: {
          100: "#e4f7e8",
          200: "#c9f0d1",
          900: "#28332a",
        },
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
