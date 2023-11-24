/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF4444",
        secondary: "#FDE047",
        tertiary: {
          DEFAULT: "#5EEAD4",
        },
        black: {
          DEFAULT: "#000000",
          100: "#781414",
          200: "#4C0011",
        },
        "light-gray": "#D3D3D3",
        light: {
          100: "#FFFFE0",
          200: "#FFFCB3",
        },
        white: {
          DEFAULT: "#ffffff",
          100: "#f3f3f3",
        },
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
// D3D3D3