/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        'green': '#123a29',
        'gray': '#F4F4F4',
        'yellow': '#C39322',
        'white': '#FFFFFF',
        'dark': '#313131'
      }
    },
  },
  plugins: [],
}