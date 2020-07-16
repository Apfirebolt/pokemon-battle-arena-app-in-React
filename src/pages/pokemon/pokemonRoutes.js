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
          <Route path={`/${pathPrefix}/move`} exact component={SearchMovePage} />
          <Route path={`/${pathPrefix}/search`} exact component={SearchPokemonPage} />
          <Route path={`/${pathPrefix}/detail/:name`} exact component={PokemonDetailPage} />
          <Route path="" exact component={PokemonHomePage} />
        </Switch>
      </Router>
    )
  }
}

export default PokemonRoutesPage;

