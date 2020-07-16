import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { CircularProgress, Typography } from '@material-ui/core';
import MovesComponent from '../../components/pokemon/moves';
import AbiliitesComponent from '../../components/pokemon/abilities';
import StasComponent from '../../components/pokemon/stats';
import SpritesComponent from '../../components/pokemon/sprites';
import PokemonCardDetails from '../../components/pokemon/otherDetails';

class DetailPokemonPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let pokemon_name = this.props.match.params.name;
    this.props.getPokemonDetail(pokemon_name);
  }

  render() {
    const { pokemon_data } = this.props;
    return (
      <Fragment>
        {pokemon_data ?
          <div>
            <PokemonCardDetails
              name={pokemon_data.name}
              pokedex={pokemon_data.id}
              experience={pokemon_data.base_experience}
              pokemon_weight={pokemon_data.weight}
              pokemon_height={pokemon_data.height}
              pokemon_area={pokemon_data.location_area_encounters}
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
