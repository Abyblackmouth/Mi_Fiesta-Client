/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/login-section.svg')",
        'hero': "url('/hero.png')",
        'empty': "url('/empty_1.png')"
      }
    },
  },
  plugins: [],
}
