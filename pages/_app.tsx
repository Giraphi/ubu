import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global-style";
import { Theme, theme } from "../styles/theme";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.scss";
import { Source_Code_Pro, Bungee } from "next/font/google";
//
export const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], variable: "--font-source-code-pro" });
export const bungee = Bungee({ subsets: ["latin"], weight: "400", variable: "--font-bungee" });

declare module "styled-components" {
    interface DefaultTheme extends Theme {}
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Ave Ubu. From this point on, there's no turning back, your king awaits you." />
                <meta name="author" content="Ubu Imperator" />
                <meta name="keywords" content="Ubu Imperator Band Munich Experimental" />

                <meta property="og:image" itemProp="image" content="/preview.png" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:title" content="Ubu Imperator" />
                <meta property="og:description" content="Your king awaits you" />
                <meta property="og:type" content="website" />
                <link rel="img_src" href="/preview.png" />
                <link rel="apple-touch-icon" href="/preview.png" />

                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" href="/favicon/favicon.ico?v=2" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <title>Ubu Imperator</title>
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
                <Analytics />
            </ThemeProvider>
        </>
    );
}
