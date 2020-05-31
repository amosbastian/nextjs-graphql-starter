import React, { ReactElement } from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, css } from "styled-components";

const globalStyles = css`
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont;

    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
  }

  a {
    text-decoration: none;
  }
`;

export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <style type="text/css">{globalStyles}</style>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
