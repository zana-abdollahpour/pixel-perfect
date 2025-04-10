/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "520px",
        lg: "976px",
      },
      colors: {
        highlight: "#6202FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "4.5xl": ["2.625rem", "1.15"],
        "5.5xl": ["3.375rem", "1"],
      },
    },
  },
  plugins: [],
};
