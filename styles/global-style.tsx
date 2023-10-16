import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "SourceCodePro";
        src: url("/fonts/source-code-pro-regular.woff") format("woff");
        font-display: swap;
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

<<<<<<< Updated upstream
    p {
        margin-top: 0;
        font-size: ${(props) => props.theme.typography.fontSize.p.base};
        line-height: ${(props) => props.theme.typography.lineHeight.p};
        margin-bottom: ${(props) => props.theme.space.sm};
    }

    h2 {
        margin-top: 0;
        margin-bottom: ${(props) => props.theme.space.sm};
        font-size: ${(props) => props.theme.typography.fontSize.h2.base};
        line-height: ${(props) => props.theme.typography.lineHeight.h2};
    }
=======
    // p {
    //     margin-top: 0;
    //     font-size: ${(props) => props.theme.typography.fontSize.p.base};
    //     line-height: ${(props) => props.theme.typography.lineHeight.p};
    //     margin-bottom: ${(props) => props.theme.space.sm};
    // }
    //
    // h2 {
    //     margin-top: 0;
    //     margin-bottom: ${(props) => props.theme.space.sm};
    //     font-size: ${(props) => props.theme.typography.fontSize.h2.base};
    //     line-height: ${(props) => props.theme.typography.lineHeight.h2};
    // }
>>>>>>> Stashed changes

    a, a:focus {
        color: ${(props) => props.theme.color.white}
    }
    a:hover {
        text-decoration: line-through;
    }

    // For safari
    svg {
        width: 100%;
        height: auto;
    }


`;
