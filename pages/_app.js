import React from 'react'

import App, { Container } from 'next/app'
import Head from 'next/head';

import withStore from '../src/utils/withStore';
import GlobalStore from '../src/alt/stores/GlobalStore';
import Title from '../src/components/Title/Title';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#212121" />
          <meta name="msapplication-TileColor" content="#212121" />

          <Title />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default withStore(MyApp, [GlobalStore]);
