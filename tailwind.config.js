/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        bg_dark: 'rgb(30 41 59)',
        whiteFont: '#ffffff',
        darkFont: '#000',
    },
  },
  plugins: [],
}
};
