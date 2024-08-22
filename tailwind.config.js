/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Royal Blue
        secondary: "#FBBF24", // Vibrant Yellow
        background: "#F9FAFB", // Off-White
        text: "#1F2937", // Charcoal Gray
        accent: "#EF4444", // Red
      },
    },
  },
  plugins: [],
};
