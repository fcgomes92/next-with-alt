import React from 'react';

import Header from '../src/components/Header/Header';
import GlobalActions from '../src/alt/actions/GlobalActions';
import { isServer } from '../src/utils';
import FilmsList from '../src/components/FilmsList';


export default class Index extends React.Component {
  static async getInitialProps() {
    const _isServer = isServer();
    if (_isServer) {
      await GlobalActions.fetchFilms();
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
        <FilmsList serverInitialized={this.props.serverInitialized}/>
      </>
    );
  }
}
