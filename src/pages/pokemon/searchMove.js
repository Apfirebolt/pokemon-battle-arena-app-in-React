import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { FormControl, Input, InputLabel, FormHelperText, CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import './main.scss';

class SearchMovePage extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      startIndex: 0,
      endIndex: 20
    }
    this.togglePageNumber = this.togglePageNumber.bind(this);
  }

  togglePageNumber() {
    console.log('Next previous buttons..');
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
        <div className="box-container">
          <h1>List of Pokemon Moves</h1>
          <FormControl>
            <InputLabel htmlFor="my-input">Search Move</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Type the name of the move to search!</FormHelperText>
          </FormControl>
          {pokemon_moves ? <Pagination count={parseInt(pokemon_moves.results.length/10)} variant="outlined" shape="rounded" onChange={this.togglePageNumber} />
            : null
          }
          {pokemon_moves ? pokemon_moves.results.map((item, index) => {
            return (
              <div className="pokemon_container" key={index}>
                <p>{item.name.toUpperCase()}</p>
                <p>{item.url}</p>
              </div>
            )
          }) : <CircularProgress size={200} color={"secondary"} disableShrink />}
        </div>
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
