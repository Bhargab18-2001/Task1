/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '50px', 'max': '270px'},
        
        'md': {'min': '270px', 'max': '370px'},
        
        'lg': {'min': '370px', 'max': '500px'},

        'xl': {'min': '500px', 'max': '650px'},

        '2xl': {'min': '650px', 'max': '800px'},

        '3xl': {'min': '800px', 'max': '1200px'},

        '4xl': {'min': '1200px', 'max': '1700px'},

        '5xl': {'min': '1700px', 'max': '2600px'},
      },
    },
  },
  plugins: [],
}
