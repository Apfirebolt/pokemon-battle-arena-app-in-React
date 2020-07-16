import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { FormControl, Input, InputLabel, FormHelperText, CircularProgress } from '@material-ui/core';

class SearchMovePage extends Component {
  constructor() {
    super();


  }
  componentDidMount() {
    this.props.getPokemonMovesData();
  }

  componentDidUpdate() {
    console.log('Updated props are : ', this.props);
  }
  render() {
    const { pokemon_moves } = this.props;
    return (
      <Fragment>
        <h1>Search Move page</h1>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        {pokemon_moves ? pokemon_moves.results.map((item, index) => {
          return (
            <li key={index}>{item.name}</li>
          )
        }) : <CircularProgress size={200} color={"secondary"} disableShrink />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemon_moves: state.pkmn.move_data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPokemonMovesData: () => {
      dispatch(actionCreators.get_pokemon_moves_util());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovePage);
