/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#60A5FA",
        text: {
          base: "#FFFFFF",
          highlight: "#4ADE80",
        },
        neutral: {
          main: "#D1D5DB",
          shade: "#99A3AF",
          contrast: "#1F2937",
        },
        accent: "#FB923C",
      },
    },
  },
  plugins: [],
};
