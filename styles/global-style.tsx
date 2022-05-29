import {createGlobalStyle} from "styled-components";

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
        color: ${props => props.theme.color.text}
    }

    * {
        box-sizing: border-box;
    }

`
