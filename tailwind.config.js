/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        "ink-2": "var(--color-ink-2)",
        "ink-3": "var(--color-ink-3)",
        crimson: "var(--color-crimson)",
        "crimson-2": "var(--color-crimson-2)",
        bone: "var(--color-bone)",
        mist: "var(--color-mist)",
        smoke: "var(--color-smoke)",
      },
      fontFamily: {
        display: ["Bebas Neue", "Oswald", "Impact", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        cine: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};