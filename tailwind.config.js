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
        mainText: "#e6e6e6",
        textHover: "#1F1F1F",
        bgNavBar: "#89D6BE",
        textNavBar: "#1F1F1F",
        bgHoverButtonNavBar: "#99E6BE",
        bgWhatsAppBar: "#3b3b3b",
        logoColor: "#99E6BE",
        redRowa: "#ED1C22",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'arial': ['arial', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'agency': ['Agency FB', 'sans-serif'],
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
