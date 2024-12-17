/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Login: '#37949b4a',
        'light-gray': '#fcfcfc',
        'lavender-gray': '#d8d8e7',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        engagement: ['Engagement', 'sans-serif'],
      },
      animation: {
        'marquee-horizontal': 'marquee-horizontal 10s linear infinite',
      },
      keyframes: {
        'marquee-horizontal': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
}
