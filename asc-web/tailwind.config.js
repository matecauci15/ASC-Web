/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C4A52', // Color principal personalizado
        secondary: '#ff5a5f', // Color secundario
        accent: '#f3f4f6', // Color de acento
      },
      fontFamily: {
        body: ['"Open Sans"', 'sans-serif'],
        heading: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

