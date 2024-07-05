/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // blue
        base: {
          main: "#60A5FA",
          shade: "#93C5FD",
        },
        // white
        font: {
          main: "#FFFFFF",
        },
        // green
        neutral: {
          main: "#4ADE80",
          shade: "#86EFAC",
          light: "#BBF7D0",
        },
        // orange / red
        accent: {
          main: "#FB923C",
          shade: "#FDBA74",
          contrast: "#F87171",
        },
      },
    },
  },
  plugins: [],
};
