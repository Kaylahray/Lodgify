/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "200px 1fr",
      },
      fontFamily: {
        idiot: ["Lato", "sans-serif"],
        fig: ["Figtree", "sans-serif"],
      },
      colors: {
        customBlue: "#D5F6E5",
        customYellow: "#E7F68E",
        customPink: "#FFC7C7",
        blueSubtle: "#F5FDF9",
        customBlack: "#0D0E0D",
        customGray: "#6E6E6E",
        customG: "#F8F8F8",
        figGray: "#A4A5A5",
        lightGray: "#A3A3A3",
        customLightYellow: "#F3FBC7",
      },
      scrollbar: {
        none: "scrollbar-width: none; -ms-overflow-style: none;",
      },
    },
  },
  plugins: [],
};
