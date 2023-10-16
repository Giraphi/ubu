import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // @font-face {
    //     font-family: "SourceCodePro";
    //     src: url("/fonts/source-code-pro-regular.woff") format("woff");
    //     font-display: swap;
    // }
    //
    // body {
    //     margin: 0;
    //     padding: 0;
    //     box-sizing: border-box;
    //     font-family: "SourceCodePro", Monospaced, monospace;
    //     color: ${(props) => props.theme.color.white};
    // }
    //
    //* {
    //    box-sizing: border-box;
    //}


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
