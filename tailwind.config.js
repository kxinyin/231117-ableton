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
        main: ["josefin-sans", "sans-serif"],
      },
      fontSize: {
        // [fontSize, lineHeight]
        // [fontSize, { lineHeight?, letterSpacing?, fontWeight? }]
        xxs: ["10px", { lineHeight: 1.8, fontWeight: "300" }],
        xs: ["12px", { lineHeight: 1.8, fontWeight: "300" }],
        sm: ["14px", { lineHeight: 1.8, fontWeight: "300" }],
        base: ["18px", { lineHeight: 1.8, fontWeight: "300" }],
        lg: ["28px", { lineHeight: 1.8, fontWeight: "300" }],
      },
      colors: {
        paleYellow: "#fbffa7",
        skyBlue: "#b1c5ff",
        mintGreen: "#b6ffc0",
        coral: "#ff764d",
        lavender: "#d5b3ff",
        blue: "#0000ff",
        paleGray: "#f3f3f3",
      },
    },
  },
};
