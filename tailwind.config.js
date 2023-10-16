/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        fontFamily: {
            mono: ["var(--font-source-code-pro)"],
            bungee: ["var(--font-bungee)"],
        },
        extend: {
            colors: {
                primary: "#ff00ff",
                secondary: "#00ffff",
                tertiary: "#00ff00",
                white: "#eee",
                black: "#111",
                darkGray: "#1f1f1f",
            },
            gridColumn: {
                // "start-content-left": "start-content-left",
                // "end-content-right": "end-content-left",
                content: "content-left / content-right",
                screen: "screen-left / screen-right",
                compact: "col-3-start / col-10-end",
            },
            animation: {
                rotate: "spin 3s linear infinite",
            },
        },
    },
    plugins: [],
};
