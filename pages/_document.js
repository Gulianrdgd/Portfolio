import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from "react";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/chakra-petch" rel="stylesheet"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            <Script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"
                    strategy="beforeInteractive"/>
            <Script defer type="text/javascript" src="./js/frontpage.js" strategy="afterInteractive" />
            </body>
        </Html>
    )
}
