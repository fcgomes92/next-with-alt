import React from 'react';

import Header from '../src/components/Header/Header';
import GlobalActions from '../src/alt/actions/GlobalActions';
import { isServer } from '../src/utils';
import FilmsDetail from '../src/components/FilmsDetail';


export default class Film extends React.Component {
  static async getInitialProps({ req }) {
    const _isServer = isServer();
    if (_isServer && req && req.query && req.query.fid) {
      await GlobalActions.fetchFilm(req.query.fid);
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
