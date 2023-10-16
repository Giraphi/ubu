/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
        fontFamily: {
            mono: ["var(--font-source-code-pro)"],
            bungee: ["var(--font-bungee)"],
        },
        colors: {
            primary: "#ff00ff",
            secondary: "#00ffff",
            tertiary: "#00ff00",
            white: "#eee",
            black: "#111",
            gray: "#1f1f1f",
        },
    },
    plugins: [],
};
