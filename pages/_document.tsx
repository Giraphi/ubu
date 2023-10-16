import { ServerStyleSheet } from "styled-components";
import { DocumentContext } from "next/dist/shared/lib/utils";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { bungee, sourceCodePro } from "./_app";

export default // @ts-ignore
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html
                lang="en"
                className={`${sourceCodePro.variable} ${bungee.variable}`}
            >
                <Head>
                    {/*<link rel="preload" href="/fonts/source-code-pro-regular.woff" as="font" type="font/woff" crossOrigin="" />*/}
                </Head>
                <body className={"font-mono text-lg leading-snug text-lightWhite"}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
