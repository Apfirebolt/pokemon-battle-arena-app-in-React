import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { CircularProgress, Typography } from '@material-ui/core';
import MovesComponent from '../../components/pokemon/moves';
import FormsComponent from '../../components/pokemon/forms';
import AbiliitesComponent from '../../components/pokemon/abilities';
import SpeciesComponent from '../../components/pokemon/species';
import StasComponent from '../../components/pokemon/stats';
import SpritesComponent from '../../components/pokemon/sprites';

class DetailPokemonPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let pokemon_name = this.props.match.params.name;
    this.props.getPokemonDetail(pokemon_name);
  }

  componentDidUpdate() {
    console.log(this.props.pokemon_data);
  }

  render() {
    const { pokemon_data } = this.props;
    return (
      <Fragment>
        {pokemon_data ?
          <div>
            <h1>Detail Pokemon page</h1>
            <h2>{pokemon_data.location_area_encounters}</h2>
            <h2>Pokedex Number : {pokemon_data.id}</h2>
            <h2>Base Experience : {pokemon_data.base_experience}</h2>
            <h2>Height : {pokemon_data.height}</h2>
            <h2>Weight : {pokemon_data.weight} LBS</h2>
            <SpeciesComponent
              species={pokemon_data.species}
            />
            <AbiliitesComponent
              abilities={pokemon_data.abilities}
            />
            <SpritesComponent
              sprites={pokemon_data.sprites}
            />
            <StasComponent
              stats={pokemon_data.stats}
            />
            <MovesComponent
              moves={pokemon_data.moves}
            />
            <FormsComponent
              forms={pokemon_data.forms}
            />
          </div>
          : <CircularProgress size={200} color={"secondary"} disableShrink />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemon_data: state.pkmn.single_pokemon,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPokemonDetail: (name) => {
      dispatch(actionCreators.get_pokemon_detail_util(name));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPokemonPage);
