import * as actionTypes from './pokemonActionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}


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

// Set pokemon types data
export const set_pokemon_types_data = ( value ) => {
  return {
    type: actionTypes.GET_POKEMON_TYPE_DATA_ACTION,
    val: value
  };
};

// Set pokemon types data
export const set_pokemon_type_detail = ( value ) => {
  return {
    type: actionTypes.GET_POKEMON_TYPE_DETAIL_DATA_ACTION,
    val: value
  };
};

// Set data for a specific item
export const set_item_detail_data = (value) => {
  return {
    type: actionTypes.GET_ITEM_DETAIL_ACTION,
    val: value
  }
}

// Fetch all pokemon from api
export const get_pokemon_util = () => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'pokemon?limit=1000&offset=0';
    axios.get(url)
      .then((response) => {
        dispatch(set_pokemon_data(response.data));
      })
      .catch((error) => {
        console.error(error);
        toast.error("API Request failed, there was some error in fetching pokemon data!", toastOptions);
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
        toast.error("API Request failed, there was some error in fetching pokemon moves!", toastOptions);
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
        toast.error("API Request failed, there was some error in fetching pokemon details!", toastOptions);
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
        toast.error("API Request failed, there was some error in fetching pokemon items!", toastOptions);
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
        toast.error("API Request failed, there was some error in fetching single move data!", toastOptions);
      })
  }
}

// Fetch pokemon types data
export const get_pokemon_types_data = () => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'type/';
    axios.get(url)
      .then((response) => {
        dispatch(set_pokemon_types_data(response.data));
        toast.info("Pokemon Types successfully fetched!", toastOptions);
      })
      .catch((error) => {
        console.error(error);
        toast.error("API Request failed, there was some error in fetching pokemon types data!", toastOptions);
      })
  }
}

// Fetch data for a specific pokemon type using type name as key
export const get_pokemon_type_detail_data = (type_name) => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'type/' + type_name;
    axios.get(url)
      .then((response) => {
        dispatch(set_pokemon_type_detail(response.data));
        toast.success("Pokemon Type details fetched successfully!", toastOptions);
      })
      .catch((error) => {
        console.error(error);
        toast.error("API Request failed, there was some error in fetching pokemon type details!", toastOptions);
      })
  }
}

// Fetch Item detail data
export const get_item_detail_data = (item_id) => {
  return (dispatch) => {
    const url = process.env.REACT_APP_URL + 'item/' + item_id;
    axios.get(url)
      .then((response) => {
        dispatch(set_item_detail_data(response.data));
        toast.success("Item details fetched!", toastOptions);
      })
      .catch((error) => {
        console.error(error);
        toast.error("API Request failed, there was some error in fetching item details!", toastOptions);
      })
  }
}

