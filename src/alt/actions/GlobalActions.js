import alt from '../alt'

import axios from 'axios';

class GlobalActions {
  fetchFilms() {
    return async dispatch => {
      try {
        const response = await axios.get(`https://swapi.co/api/films/`);
        dispatch(response.data);
      } catch (error) {
        throw error;
      }
    };
  }

  fetchFilm(fid) {
    return async dispatch => {
      try {
        const response = await axios.get(fid);
        dispatch({ data: response.data, fid });
      } catch (error) {
        throw error;
      }
    };
  }
}

export default alt.createActions(GlobalActions);