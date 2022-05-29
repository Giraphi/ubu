import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {AppProps} from "next/app";
import '../styles/globals.css'


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "SourceCodePro";
        src: url("/fonts/source-code-pro-regular.woff") format("woff");
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: deeppink;
        font-family: "SourceCodePro";
    }

`

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
