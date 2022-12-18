/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './docs/**/*.md'
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '20px',
        sm: '30px',
        lg: '60px',
        xl: '80px',
        '2xl': '90px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
