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

// Set all item data
export const set_pokemon_items_data = ( value ) => {
  return {
    type: actionTypes.GET_ALL_ITEMS_ACTION,
    val: value
  };
};

// Set single move detail
export const set_single_move_detail = ( value ) => {
  return {
    type: actionTypes.GET_MOVE_DETAIL_ACTION,
    val: value
  };
};

// Fetch quizes from the Open DB Api
export const get_pokemon_util = () => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'pokemon?limit=1000&offset=0';
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
    const url = process.env.REACT_APP_URL + 'move?offset=0&limit=800';
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
export const get_pokemon_detail_util = (pokemon_name) => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'pokemon/' + pokemon_name;
    axios.get(url)
      .then((response) => {
        dispatch(set_pokemon_detail_data(response.data));
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

// Fetch data related to all pokemon items
export const get_pokemon_items_util = () => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'item/?offset=0&limit=900';
    axios.get(url)
      .then((response) => {
        dispatch(set_pokemon_items_data(response.data));
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

// Fetch move detail for a given move
export const get_single_move_detail = (move_id) => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'move/' + move_id;
    axios.get(url)
      .then((response) => {
        dispatch(set_single_move_detail(response.data));
      })
      .catch((error) => {
        console.error(error);
      })
  }
}