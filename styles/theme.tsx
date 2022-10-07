export const theme = {
    color: {
        primary: "#ff00ff",
        secondary: "#00ffff",
        tertiary: "#00ff00",
        background: "#112",
        white: "#eee",
        black: "#111",
        gray: "#555",
    },
    space: {
        gutter: 8,
        sm: "24px",
        md: "32px",
        lg: "54px",
        figure: "80px",
    },
    typography: {
        fontSize: {
            p: "18px",
            h2: "32px",
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
            xlg: "1120px",
        },
        spaceHorizontal: {
            base: "24px",
            md: "32px",
            lg: "48px",
            xlg: "48px",
        },
    },
    breakpoints: {
        sm: 568,
        md: 768,
        lg: 1024,
        xlg: 1440,
    },
    ratio: {
        square: 1,
        wide: 1.62,
        xWide: 2.4,
        high: 0.8,
    },
};

export type Theme = typeof theme;
