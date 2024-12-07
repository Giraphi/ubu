/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      mono: ["var(--font-source-code-pro)"],
      bungee: ["var(--font-bungee)"],
    },
    screens: {
      sm: "568px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#ff00ff",
        secondary: "#00ffff",
        tertiary: "#00ff00",
        black: "#111",
        darkGray: "#1f1f1f",
        blackTransparent: "rgba(17,17,17,0.6)",
      },
      gridColumn: {
        // "start-content-left": "start-content-left",
        // "end-content-right": "end-content-left",
        content: "content-left / content-right",
        screen: "screen-left / screen-right",
        compact: "col-3-start / col-10-end",
      },
      keyframes: {
        color: {
          "0%": {
            color: "#ff00ff",
          },

          "33%": {
            color: "#00ffff",
          },

          "66%": {
            color: "#00ff00",
          },

          "100%": {
            color: "#ff00ff",
          },
        },
        borderColor: {
          "0%": {
            borderColor: "#ff00ff",
          },

          "33%": {
            borderColor: "#00ffff",
          },

          "66%": {
            borderColor: "#00ff00",
          },

          "100%": {
            borderColor: "#ff00ff",
          },
        },
      },
      animation: {
        color: "color 4s linear infinite",
      },
      cursor: {
        clickText: "url('/cursor.svg') 48 16, pointer",
      },
    },
  },
  plugins: [],
}
