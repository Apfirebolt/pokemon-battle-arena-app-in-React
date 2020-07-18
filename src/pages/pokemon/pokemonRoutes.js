import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchMovePage from './searchMove';
import SearchPokemonPage from './searchPokemon';
import PokemonHomePage from './pokemonHomePage';
import PokemonDetailPage from './detailPokemon';
import PokemonItemsPage from './itemsPage';
import PokemonMoveDetailPage from './detailMove';
import PokemonTypesDataPage from './pokemonTypes';
import PokemonItemDetailPage from './itemDetail';
import PokemonTypeDetailPage from './typeDetail';


class PokemonRoutesPage extends Component {
  constructor() {
    super();
    this.state = {
      pathPrefix: 'pokemon'
    }

  }
  render() {
    const { pathPrefix } = this.state;
    return (
      <Switch>
        <Route name="move" path={`/${pathPrefix}/move`} exact component={SearchMovePage} />
        <Route name="types" path={`/${pathPrefix}/types`} exact component={PokemonTypesDataPage} />
        <Route name="type_name" path={`/${pathPrefix}/types/:type_name`} exact component={PokemonTypeDetailPage} />
        <Route name="pokemon_search" path={`/${pathPrefix}/search`} exact component={SearchPokemonPage} />
        <Route name="pokemon_items" path={`/${pathPrefix}/items`} exact component={PokemonItemsPage} />
        <Route name="pokemon_items" path={`/${pathPrefix}/items/:item_id`} exact component={PokemonItemDetailPage} />
        <Route name="pokemon_detail" path={`/${pathPrefix}/detail/:name`} exact component={PokemonDetailPage} />
        <Route name="pokemon_move_detail" path={`/${pathPrefix}/move/:move_id`} exact component={PokemonMoveDetailPage} />
        <Route name="pokemon" path="" exact component={PokemonHomePage} />
      </Switch>
    )
  }
}

export default PokemonRoutesPage;

