/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  plugins: ["tailwindcss ,autoprefixer"], 

/*  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }*/
}