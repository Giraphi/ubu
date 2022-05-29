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
        color: ${props => props.theme.color.white};
    }

    * {
        box-sizing: border-box;
    }
    
    p {
        margin-top: 0;
        margin-bottom: ${props => props.theme.space.sm.base};
    }

`
