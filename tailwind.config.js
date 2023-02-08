/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Light-red-CTA-text': 'hsl(356, 100%, 66%)',
        'Very-light-red-CTA-hover-background': 'hsl(355, 100%, 74%)',
        'Very-dark-blue-headings': 'hsl(208, 49%, 24%)',
        'White': 'hsl(0, 0%, 100%)',
        'Grayish-blue-footer-text': 'hsl(240, 2%, 79%)',
        'Very-dark-grayish-blue-body-copy': 'hsl(207, 13%, 34%)',
        'Very-dark-black-blue-footer-background': 'hsl(240, 10%, 16%)',
        'Very-light-red-bg': 'hsl(13, 100%, 72%)',
        'Light-red-bg': 'hsl(353, 100%, 62%)',
        'Very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'Very-dark-desaturated-blue': 'hsl(237, 23%, 32%)'
      },
      container:{
        padding:'1.5rem'
      },
      borderRadius:{
        '5xl':'5rem'
      },
      height:{
        '5xl':'40rem'
      },
      screens:{
        'md':'800px'
      },
    },
    fontFamily:{
      'Overpass': ['Overpass,sans-serif'],
      'Ubuntu':['Ubuntu, sans-serif']
    },
  },
  plugins: [],
}
