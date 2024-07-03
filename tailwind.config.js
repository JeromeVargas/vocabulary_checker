/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          main: "#60A5FA",
          shade: "#93C5FD",
        },
        font: {
          main: "#FFFFFF",
        },
        neutral: {
          main: "#4ADE80",
          shade: "#86EFAC",
          light: "#BBF7D0",
        },
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
