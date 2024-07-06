/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          main: "#60A5FA", // blue
          shade: "#93C5FD",
        },
        font: {
          main: "#FFFFFF", // white
        },
        neutral: {
          main: "#4ADE80", // green
          shade: "#86EFAC",
          light: "#BBF7D0",
        },

        accent: {
          main: "#FB923C", // orange
          shade: "#FDBA74",
          contrast: "#F87171", // red
        },
      },
    },
  },
  plugins: [],
};
