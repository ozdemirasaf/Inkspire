module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 #0000, 0 0 #0000, 0 0 #0000, 0 2px 15px -3px #0000000a, 0 10px 20px -2px #00000012',
        'layouts': '0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 12px 0 #00000012, 0 2px 4px #0000000d',
        // 'error': '-2px 6px 13px 6px rgba(204,66,66,0.49)'
      },

    },
  },
  plugins: [],
}
