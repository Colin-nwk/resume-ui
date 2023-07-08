/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

import { motion } from "framer-motion";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>collins nwoko</title>
        <meta
          property="og:title"
          content="collins nwoko, my portfolio website"
          key="title"
        />

        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
