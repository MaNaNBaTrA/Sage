/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Login:'#37949b4a'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

