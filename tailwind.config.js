/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      colors: {
        dark: "rgb(3 7 18)",
        dark2: "rgb(31 41 55)",
        button: "rgb(99 102 241)",
      },
    },
  },
  plugins: [],
};
