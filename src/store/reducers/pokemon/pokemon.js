import * as actionTypes from './pokemonActionTypes';
import { updateObject } from '../../utility';

const initialState = {
  pokemon_data: null,
  move_data: null,
  single_pokemon: null,
  all_items: null,
  single_move_data: null,
  pokemon_types: null,
  single_item_data: null,
  pokemon_type_detail: null
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_POKEMON_DATA_ACTION:
      return updateObject(state, {pokemon_data: action.val});
    case actionTypes.GET_POKEMON_MOVES_ACTION:
      return updateObject(state, {move_data: action.val});
    case actionTypes.GET_POKEMON_DETAIL_ACTION:
      return updateObject(state, {single_pokemon: action.val});
    case actionTypes.GET_ALL_ITEMS_ACTION:
      return updateObject(state, {all_items: action.val});
    case actionTypes.GET_MOVE_DETAIL_ACTION:
      return updateObject(state, {single_move_data: action.val});
    case actionTypes.GET_POKEMON_TYPE_DATA_ACTION:
      return updateObject(state, {pokemon_types: action.val});
    case actionTypes.GET_ITEM_DETAIL_ACTION:
      return updateObject(state, {single_item_data: action.val});
    case actionTypes.GET_POKEMON_TYPE_DETAIL_DATA_ACTION:
      return updateObject(state, {pokemon_type_detail: action.val});
    default:
      return state;
  }
  return state;
};

export default reducer;