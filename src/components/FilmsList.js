import React from 'react';

import Link from 'next/link';

import connectToStores from 'alt-utils/lib/connectToStores';
import GlobalStore from '../alt/stores/GlobalStore';
import GlobalActions from '../alt/actions/GlobalActions';

class FilmsList extends React.Component {
  static getStores = () => [GlobalStore];
  static getPropsFromStores = () => GlobalStore.getState();

  state = {
    loading: false,
  };

  componentDidMount() {
    if (!this.props.serverInitialized) {
      this.handleFetchData();
    }
  }

  handleFetchData = async () => {
    await this.setState({ loading: true });
    await GlobalActions.fetchFilms();
    await this.setState({ loading: false });
  };

  render() {
    if (this.props.loading) return <p>Loading...</p>;
    return (
      <>
        <p>Movies:</p>
        <ul>
          {this.props.films.ids.map((fid, idx) => {
            const film = this.props.films.items[fid];
            return (
              <Link href={`/film?fid=${fid}`} key={idx}>
                <li>
                  {film.title}
                </li>
              </Link>
            )
          })}
        </ul>
      </>
    );
  }
}

export default connectToStores(FilmsList);