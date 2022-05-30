export const theme = {
    color: {
        primary: '#ff00ff',
        secondary: '#00ffff',
        tertiary: '#00ff00',
        background: "#112",
        white: '#eee',
        black: "#111"
    },
    space: {
        gutter: 8,
        sm: {
            base: "24px",
        },
        md: {
            base: "32px",
            lg: "48px"
        },
        lg: {
            base: "80px",
        },
    },
    typography: {
        fontSize: {
            p: {
                base: "18px",
            }
        },
        lineHeight: {
            p: {
                base: "130%",
            }
        }
    },

    grid: {
        gap: {
            base: "8px",
            md: "16px",
            lg: "20px",
        },
        contentMaxWidth: {
            xlg: "1276px",
        },
        spaceHorizontal: {
            base: "32px",
            md: "32px",
            lg: "48px",
            xlg: "48px"
        },
    },
    breakpoints: {
        sm: 568,
        md: 768,
        lg: 1024,
        xlg: 1440,
    },
}

export type Theme = typeof theme;
