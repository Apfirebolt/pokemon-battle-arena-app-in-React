import * as actionTypes from './pokemonActionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';


export const set_pokemon_data = ( value ) => {
  return {
    type: actionTypes.GET_POKEMON_DATA_ACTION,
    val: value
  };
};

// Set pokemon moves data
export const set_pokemon_moves_data = ( value ) => {
  return {
    type: actionTypes.GET_POKEMON_MOVES_ACTION,
    val: value
  };
};

// Set details for a single pokemon
export const set_pokemon_detail_data = ( value ) => {
  return {
    type: actionTypes.GET_POKEMON_DETAIL_ACTION,
    val: value
  };
};

// Fetch quizes from the Open DB Api
export const get_pokemon_util = () => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'pokemon?limit=100&offset=200';
    axios.get(url)
      .then((response) => {
        dispatch(set_pokemon_data(response.data));
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

// Fetch data of all the moves from Pokemon API
export const get_pokemon_moves_util = () => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'move';
    axios.get(url)
      .then((response) => {
        dispatch(set_pokemon_moves_data(response.data));
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

// Fetch data for a single pokemon
export const get_pokemon_detail_util = () => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'pokemon/pikachu';
    axios.get(url)
      .then((response) => {
        dispatch(set_pokemon_detail_data(response.data));
      })
      .catch((error) => {
        console.error(error);
      })
  }
}