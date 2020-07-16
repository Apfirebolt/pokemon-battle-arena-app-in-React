import * as actionTypes from './pokemonActionTypes';
import { updateObject } from '../../utility';

const initialState = {
  pokemon_data: null,
  move_data: null,
  single_pokemon: null
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_POKEMON_DATA_ACTION:
      return updateObject(state, {pokemon_data: action.val});
    case actionTypes.GET_POKEMON_MOVES_ACTION:
      return updateObject(state, {move_data: action.val});
    case actionTypes.GET_POKEMON_DETAIL_ACTION:
      return updateObject(state, {single_pokemon: action.val});
    default:
      return state;
  }
  return state;
};

export default reducer;