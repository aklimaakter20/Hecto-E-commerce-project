/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "20px"
    },
    extend: {
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
        "sans": ["Josefin Sans", "sans-serif"]
      },
      backgroundColor:{
        "section-bg": '#8A8FB9'
      },
      colors: {
        "primary": " #FB2E86"

      }

    },
  },
  plugins: [],
}