import React from 'react';

import Header from '../src/components/Header/Header';
import GlobalActions from '../src/alt/actions/GlobalActions';
import { isServer } from '../src/utils';
import FilmsDetail from '../src/components/FilmsDetail';


export default class Film extends React.Component {
  static async getInitialProps({ query }) {
    const _isServer = isServer();
    if (_isServer && query && query.fid) {
      await GlobalActions.fetchFilm(query.fid);
    }
    return {
      serverInitialized: _isServer,
      namespacesRequired: ['common'],
    }
  }

  render() {
    return (
      <>
        <Header />
        <FilmsDetail serverInitialized={this.props.serverInitialized} />
      </>
    );
  }
}
