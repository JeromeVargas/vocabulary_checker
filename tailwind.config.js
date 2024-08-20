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
      animation: {
        "pulse-slow": "wiggle 2s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%": {
            // transform: "scale(0.95)",
            "box-shadow": "0 0 0 0 rgba(229, 62, 62, 1)",
          },
          "100%": {
            // transform: "scale(1)",
            "box-shadow": "0 0 0 20px rgba(229, 62, 62, 0)",
          },
          // "100%": {
          //   // transform: "scale(0.95)",
          // },
        },
      },
    },
  },
  darkMode: ['[data-theme="dark"]'],
  plugins: [],
};
