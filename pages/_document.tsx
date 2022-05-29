import {ServerStyleSheet} from 'styled-components'
import {DocumentContext} from "next/dist/shared/lib/utils";
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default // @ts-ignore
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/source-code-pro-regular.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin=""
                    />

                    <meta charSet="utf-8"/>
                    <link rel="icon" href="%PUBLIC_URL%/icon.ico"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="theme-color" content="#000000"/>

                    <meta name="description" content="Ave Ubu. From this point on, there's no turning back, your king awaits you."/>
                    <meta name="author" content="Ubu Imperator"/>
                    <meta name="keywords"
                          content="Ubu Imperator Band Munich Experimental"/>

                    <meta property="og:image" itemProp="image" content="%PUBLIC_URL%/eye.png"/>
                    <meta property="og:image:type" content="image/jpg"/>
                    <meta property="og:title" content="Ubu Imperator"/>
                    <meta property="og:description" content="Ubu Imperator"/>
                    <meta property="og:type" content="website"/>
                    <link rel="img_src" href="/preview.png"/>
                    <link rel="apple-touch-icon" href="/preview.png"/>

                    <title>Ubu Imperator</title>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
