/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'rme': '#FFFFFF'
      },

      fontSize: {
        'xs': '0.8rem',
      },

      height:{
        '70': '70vh'
      },

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      colors: {
        'green': '#123a29',
        'gray': '#F4F4F4',
        'yellow': '#C39322',
        'white': '#FFFFFF',
        'dark': '#313131',
        'lightdark': '#CECECE'
      },

      fontFamily: {
        'playfair': ['var(--font-playfair)'],
        'opensans': ['var(--font-openSans)']
      },

      margin: {
        '120px': '120px',
      },

    },
  },
  plugins: [],
}