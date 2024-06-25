/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppin':['Poppins', 'sans-serif'],
        'manrope':['Manrope', 'sans-serif'],
        'head':['Roboto Serif', 'sans-serif']
      },
      backgroundColor:{
        'primary':["#840033"]
      },
      colors:{
        primary:["#840033"]
      }
    },
  },
  plugins: [],
}

