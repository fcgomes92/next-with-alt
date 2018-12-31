import React from 'react'

import Document, { Head, Main, NextScript } from 'next/document'

import GlobalStore, { __NEXT_REDUX_STORE__ } from '../src/alt/stores/GlobalStore';
import Title from '../src/components/Title/Title';

export default class JssDocument extends Document {
  static getInitialProps(ctx) {
    const page = ctx.renderPage(App => props => (
      <App {...props} />
    ));

    return { ...page };
  }


  render() {
    return (
      <html>
      <Head>
        <script
          id={__NEXT_REDUX_STORE__}
          dangerouslySetInnerHTML={{
            __html: `window['${__NEXT_REDUX_STORE__}'] = ${JSON.stringify(GlobalStore.getState())}`,
          }}
        />
        <Title />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
      </html>
    )
  }
}