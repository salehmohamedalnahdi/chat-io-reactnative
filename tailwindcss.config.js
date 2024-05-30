module.exports = {
  content: [
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p: '#FC92E3', // Replace with your desired color value
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
