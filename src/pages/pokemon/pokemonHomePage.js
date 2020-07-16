import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { ListItem, CircularProgress } from '@material-ui/core';


class PokemonHomePage extends Component {
  constructor() {
    super();


  }

  componentDidMount() {
    this.props.getPokemonData();
    console.log('Props data : ', this.props.pokemon);
  }
  
  render() {
    const { pokemon } = this.props;
    return (
      <Fragment>
        <h1>Pokemon Home page</h1>
        {pokemon ? pokemon.results.map((item, index) => {
          return (
            <div key={index}>
              <ListItem>{item.name}</ListItem>
              <a href={item.url}>{item.url}</a>
            </div>
          )
        })
        : <CircularProgress size={200} color={"secondary"} disableShrink />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pkmn.pokemon_data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPokemonData: () => {
      dispatch(actionCreators.get_pokemon_util());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHomePage);