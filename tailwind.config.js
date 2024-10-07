/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "200px 1fr",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        customBlue: "#D5F6E5",
        customYellow: "#E7F68E",
        customPink: "#FFC7C7",
        blueSubtle: "#F5FDF9",
        customBlack: "#0D0E0D",
        customGray: "#6E6E6E",
      },
    },
  },
  plugins: [],
};
