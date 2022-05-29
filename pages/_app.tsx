import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {AppProps} from "next/app";
import {GlobalStyle} from "../styles/global-style";
import {Theme, theme} from "../styles/theme";

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
