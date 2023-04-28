/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '9.64rem',
        md: '3rem',
        lg: '9.64rem',
        xl: '9.64rem',
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%'
      }
    },
    colors: {
      'primary': '#182E46',
      'primary2': '#1B2431',
      'secondary': '#FF7A00',
      'dark': '#F9F9F9',
      'white': '#fff',
      'black': '#000',
      'yellow': '#FFC92A',
    },
    backgroundColor: {
      'gray': '#F9F9F9',
      'primary': '#182E46',
      'primary2': '#1B2431',
      'white': '#fff',
      'black': '#000',
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
  },
  plugins: [],
}

