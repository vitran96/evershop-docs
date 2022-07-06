/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.js',
      './docs/**/*.md'
    ]
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
