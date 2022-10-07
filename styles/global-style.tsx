import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "SourceCodePro";
        src: url("/fonts/source-code-pro-regular.woff") format("woff");
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "SourceCodePro", Monospaced, monospace;
        color: ${(props) => props.theme.color.white};
    }

    * {
        box-sizing: border-box;
    }

    p {
        margin-top: 0;
        font-size: ${(props) => props.theme.typography.fontSize.p};
        line-height: ${(props) => props.theme.typography.lineHeight.p};

        :not(:last-child) {
            margin-bottom: ${(props) => props.theme.space.sm};
        }
    }

    a, a:hover, a:focus {
        color: ${(props) => props.theme.color.white}
    }

    // For safari
    svg {
        width: 100%;
        height: auto;
    }

    h2 {
        font-size: ${(props) => props.theme.typography.fontSize.h2};
        line-height: ${(props) => props.theme.typography.lineHeight.h2};
    }

`;
