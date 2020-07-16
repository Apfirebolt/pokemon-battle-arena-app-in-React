import pokemonReducer from './reducers/pokemon/pokemon';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  pkmn: pokemonReducer,
});

export default rootReducer;
