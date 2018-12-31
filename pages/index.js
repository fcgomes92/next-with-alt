import React from 'react';

import Header from '../src/components/Header/Header';
import GlobalActions from '../src/alt/actions/GlobalActions';
import { isServer } from '../src/utils';
import FilmsList from '../src/components/FilmsList';


class Index extends React.Component {
  static async getInitialProps({ req }) {
    const _isServer = isServer();
    if (_isServer) {
      await GlobalActions.fetchFilms();
      if (req.query.fid) {
        await GlobalActions.fetchFilm(req.query.fid);
      }
    }
    return {
      namespacesRequired: ['common'],
    }
  }

  state = {
    loadingFilm: false,
  };

  render() {
    return (
      <>
        <Header />
        <FilmsList />
      </>
    );
  }
}

export default Index;