/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#663399', 
      },
    },
  },
  plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
]
}
