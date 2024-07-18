/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          main: "rgb(var(--color-base-main))",
          shade: "rgb(var(--color-base-shade))", // blue - black
        },
        font: {
          main: "rgb(var(--color-font-main))", // white
        },
        neutral: {
          main: "rgb(var(--color-neutral-main))",
          shade: "rgb(var(--color-neutral-shade))",
          light: "rgb(var(--color-neutral-light))", // green - gray
        },

        accent: {
          main: "rgb(var(--color-accent-main))", // orange - green
          shade: "rgb(var(--color-accent-shade))",
          contrast: "rgb(var(--color-accent-contrast))", // red
        },
      },
    },
  },
  plugins: [],
};
