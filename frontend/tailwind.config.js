/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#008080",  
        "secondary":"#FF8C00", 
        "tertiary":"#00bfff", 
        "fourth":"#FF8C00",
        "fifth":"#333",
      }
    },
    screens:{
      lg:{max:"2023px"},
      // md:{max:"767px"},
      sm:{max:"1000px"},
    }
  },
  plugins: [],
}
