/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        bg_dark: '#0e1630',
        whiteFont: '#ffffff',
        darkFont: '#000',
    },
  },
  plugins: [],
}
};
