import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <body>
            <Main />
            <title>
              KaBuM! | Maior E-commerce de Tecnologia e Games da América Latina
            </title>
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
