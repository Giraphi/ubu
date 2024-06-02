export const theme = {
    color: {
        primary: "#ff00ff",
        secondary: "#00ffff",
        tertiary: "#00ff00",
        white: "#fff",
        black: "#111",
        gray: "#1f1f1f",
        blackTransparent: "rgba(17,17,17,50)",
    },
    space: {
        gutter: 8,
        sm: "24px",
        md: "32px",
        lg: "56px",
        xl: "108px",
        figure: "80px",
    },
    typography: {
        fontSize: {
            p: {
                base: "18px",
            },
            h2: {
                base: "32px",
            },
        },
        lineHeight: {
            p: "130%",
            h2: "130%",
        },
    },
    grid: {
        gap: {
            base: "8px",
            md: "16px",
            lg: "20px",
        },
        contentMaxWidth: {
            xl: "1120px",
        },
        spaceHorizontal: {
            base: "20px",
            md: "32px",
            lg: "48px",
            xl: "48px",
        },
    },
    breakpoints: {
        sm: 568,
        md: 768,
        lg: 1024,
        xl: 1440,
    },
    ratio: {
        square: 1,
        wide: 1.78,
        youtube: 1.78,
        xWide: 2.4,
        high: 0.8,
        klangschutzBanner: 4.55,
    },
};

export type Theme = typeof theme;
