module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.js'
    ]
  },
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        'feature': '50px 1fr',
      },
      spacing: {
        '30': '7rem',
      },
      colors: {
        white: '#ffffff',
        primary: '#0070f3',
        secondary: '#111213',
        text: "#111111",
        textSecondary: "#666666",
        btnHover: "#5a91ea"
      },
    },
  },
  plugins: [],
}
