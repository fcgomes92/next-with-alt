import React from 'react';

import connectToStores from 'alt-utils/lib/connectToStores';
import GlobalStore from '../alt/stores/GlobalStore';
import GlobalActions from '../alt/actions/GlobalActions';
import FilmsDetail from './FilmsDetail';

class FilmsList extends React.Component {
  static getStores = () => [GlobalStore];
  static getPropsFromStores = () => GlobalStore.getState();

  state = {
    loadingFilm: false
  };

  componentDidMount() {
    if (!this.props.serverInitialized) {
      this.handleFetchData();
    }
  }

  handleFetchData = async () => {
    await this.setState({ loadingFilms: true });
    await GlobalActions.fetchFilms();
    await this.setState({ loadingFilms: false });
  };

  render() {
    return (
      <>
        <p>Movies:</p>
        <ul>
          {this.props.films.ids.map((fid, idx) => {
            const film = this.props.films.items[fid];
            return (
              <li
                key={idx}
                onClick={async () => {
                  window.history.pushState('', '', `/index?fid=${fid}`);
                  await this.setState({ loadingFilm: true });
                  await GlobalActions.fetchFilm(fid);
                  await this.setState({ loadingFilm: false });
                }}
              >{film.title}</li>
            )
          })}
        </ul>
        <FilmsDetail loading={this.state.loadingFilm}/>
      </>
    );
  }
}

export default connectToStores(FilmsList);