/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,jsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        // * App01 (Ableton)
        app01_main: ["josefin-sans", "sans-serif"],
      },
      fontSize: {
        // [fontSize, lineHeight]
        // [fontSize, { lineHeight?, letterSpacing?, fontWeight? }]
        // * App01 (Ableton)
        app01_xxs: ["10px", { lineHeight: 1.8, fontWeight: "300" }],
        app01_xs: ["12px", { lineHeight: 1.8, fontWeight: "300" }],
        app01_sm: ["14px", { lineHeight: 1.8, fontWeight: "300" }],
        app01_base: ["18px", { lineHeight: 1.8, fontWeight: "300" }],
        app01_lg: ["28px", { lineHeight: 1.8, fontWeight: "300" }],
      },
      colors: {
        // * App01 (Ableton)
        app01_paleYellow: "#fbffa7",
        app01_skyBlue: "#b1c5ff",
        app01_mintGreen: "#b6ffc0",
        app01_coral: "#ff764d",
        app01_lavender: "#d5b3ff",
        app01_blue: "#0000ff",
        app01_paleGray: "#f3f3f3",
      },

      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
};
