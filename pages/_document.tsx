import { Html, Head, Main, NextScript } from "next/document";
import { AppContextProvider } from "./app_context";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>⚡️ Pier Flash</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <AppContextProvider>
          <Main />
        </AppContextProvider>
        <NextScript />
      </body>
    </Html>
  );
}
