export const theme = {
    color: {
        primary: '#ff00ff',
        secondary: '#00ffff',
        tertiary: '#00ff00',
        background: "#112",
        white: '#f0f0f0',
        black: "#090909"
    },
    space: {
        gutter: 8,
        md: {
            base: "48px",
        },
        sm: {
            base: "24px",
        },
        xs: {
            base: "8px",
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
            base: "22px",
            md: "42px",
            lg: "42px",
            xlg: "82px",
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
