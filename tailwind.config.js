/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      greenLight : {
        extend : "light",
        colors: {
          background: "#ffffff",
          foreground: "#1C1A1C",
          primary : {
            DEFAULT: "#3342FF",
            foreground: "#ffffff",
          },
          background_secondary: "#F5F6F9",
          middle_ground: "#7D7E8A",
          button_secondary: "#D8D9DA",
        }
      },
      twLight : {
        extend : "light",
        colors: {
          background: "#ffffff",
          foreground: "#1C1A1C",
          primary : {
            DEFAULT: "#000f96",
            foreground: "#ffffff",
          },
          background_secondary: "#8ab2e8",
          middle_ground: "#7D7E8A",
          button_secondary: "#D8D9DA",
        },
      },
      twDark : {
        extend : "dark",
        colors: {
          background: "#11082d",
          foreground: "#f84bd5",
          primary : {
            DEFAULT: "#1b26bc",
            foreground: "#ffffff",
          },
          background_secondary: "#0c0233",
        }
      }
    }
  })],
}