import '../faust.config';
import { FaustProvider } from '@faustjs/next';
import React from 'react';

import type { AppProps } from 'next/app';
import {client} from "client";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <FaustProvider client={client} pageProps={pageProps}>
                <Component {...pageProps} />
            </FaustProvider>
        </>
    );
}
