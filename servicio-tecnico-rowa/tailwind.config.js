// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey: "#1F1F1F",
        customOrange: "#D54700",
        customWhite: "#e6e6e6",
        bgNavBar: "#89D6BE",
        textNavBar: "#1F1F1F",
        bgHoverButtonNavBar: "#99E6BE",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'arial': ['arial', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      textShadow: {
        'default': '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
        },
      });
    },
  ],
}
