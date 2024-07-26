/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "second-color": "var(--second-color)",
        "third-color": "var(--third-color)",
        "fourth-color": "var(--fourth-color)",
        "dark-color": "var(--dark-color)",
      }
    },
  },
  plugins: [],
}