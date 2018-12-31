import React from 'react';

import connectToStores from 'alt-utils/lib/connectToStores';
import GlobalStore from '../alt/stores/GlobalStore';
import GlobalActions from '../alt/actions/GlobalActions';

class FilmsDetail extends React.Component {
  static getStores = () => [GlobalStore];
  static getPropsFromStores = () => GlobalStore.getState();

  componentDidMount() {
    if (!this.props.serverInitialized) {
      this.handleFetchData();
    }
  }

  handleFetchData = async () => {
    await this.setState({ loading: true });
    await GlobalActions.fetchFilm(this.props.currentFilm.id);
    await this.setState({ loading: false });
  };

  render() {
    if (!this.props.films.currentFilm) return null;
    if (this.props.loading) return <p>Loading...</p>
    return (
      <>
        <p>Movie: {this.props.films.currentFilm.title}</p>
        <p>{this.props.films.currentFilm.opening_crawl}</p>
      </>
    );
  }
}

export default connectToStores(FilmsDetail);