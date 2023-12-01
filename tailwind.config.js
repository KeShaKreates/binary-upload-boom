/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '675px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#a3bfb2",
                   
          "secondary": "#ECFDF5",
                   
          "accent": "#000000",
                   
          "neutral": "#a3bfb2",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#ECFDF5",
                   
          "success": "#bae6fd",
                   
          "warning": "#fed7aa",
                   
          "error": "#fda4af",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}