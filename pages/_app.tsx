import {ThemeProvider} from 'styled-components'
import {AppProps} from "next/app";
import {GlobalStyle} from "../styles/global-style";
import {Theme, theme} from "../styles/theme";
import Head from 'next/head';

declare module "styled-components" {
    interface DefaultTheme extends Theme {}
}

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="theme-color" content="#000000"/>

                <meta name="description" content="Ave Ubu. From this point on, there's no turning back, your king awaits you."/>
                <meta name="author" content="Ubu Imperator"/>
                <meta name="keywords"
                      content="Ubu Imperator Band Munich Experimental"/>

                <meta property="og:image" itemProp="image" content="/preview.png"/>
                <meta property="og:image:type" content="image/jpg"/>
                <meta property="og:title" content="Ubu Imperator"/>
                <meta property="og:description" content="Your king awaits you"/>
                <meta property="og:type" content="website"/>
                <link rel="img_src" href="/preview.png"/>
                <link rel="apple-touch-icon" href="/preview.png"/>

                <title>Ubu Imperator</title>
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
