import React from 'react';

import connectToStores from 'alt-utils/lib/connectToStores';
import GlobalStore from '../alt/stores/GlobalStore';
import GlobalActions from '../alt/actions/GlobalActions';

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

class FilmsDetail extends React.Component {
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
    const fid = getParameterByName('fid');
    if (fid) {
      await this.setState({ loading: true });
      await GlobalActions.fetchFilm(fid);
      await this.setState({ loading: false });
    }
  };

  render() {
    if (!this.props.films.currentFilm) return null;
    if (this.state.loading) return <p>Loading...</p>;
    return (
      <>
        <p>Movie: {this.props.films.currentFilm.title}</p>
        <p>{this.props.films.currentFilm.opening_crawl}</p>
      </>
    );
  }
}

export default connectToStores(FilmsDetail);