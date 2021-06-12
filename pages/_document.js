import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fa">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@latest/dist/font-face.css"
            rel="stylesheet"
            type="text/css"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="SRWucOHtSKtFiigX8SqDOAsFRsmrEGlx469Eo1NnG5g"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
