/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        darkCustom: "#0E1E2B",
      },
      animation: {
        "bounce-slow": "pulse 3s linear infinite",
      },
    },
  },
  plugins: [],
};
