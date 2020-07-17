import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import SearchMovePage from './searchMove';
import SearchPokemonPage from './searchPokemon';
import PokemonHomePage from './pokemonHomePage';
import PokemonDetailPage from './detailPokemon';


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
      <Router>
        <Switch>
          <Route name="move" path={`/${pathPrefix}/move`} exact component={SearchMovePage} />
          <Route name="pokemon_search" path={`/${pathPrefix}/search`} exact component={SearchPokemonPage} />
          <Route name="pokemon_detail" path={`/${pathPrefix}/detail/:name`} exact component={PokemonDetailPage} />
          <Route name="pokemon" path="" exact component={PokemonHomePage} />
        </Switch>
      </Router>
    )
  }
}

export default PokemonRoutesPage;

