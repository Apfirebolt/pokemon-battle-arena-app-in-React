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
      endIndex: 20,
      pageNumbers: 0,
      itemsPerPage: 20
    }
    this.togglePageNumber = this.togglePageNumber.bind(this);
  }

  togglePageNumber(event) {
    let { itemsPerPage } = this.state;
    let current = parseInt(event.target.innerText);
    let newStartIndex = itemsPerPage * (current-1);
    let newEndIndex = newStartIndex + itemsPerPage;

    this.setState({
      currentPage: current,
      startIndex: newStartIndex,
      endIndex: newEndIndex
    })
  }

  componentDidMount() {
    this.props.getPokemonMovesData();
  }

  render() {
    const { pokemon_moves } = this.props;
    let { startIndex, endIndex, itemsPerPage } = this.state;
    return (
      <Fragment>
        <div className="box-container">
          <h1>List of Pokemon Moves</h1>
          <FormControl>
            <InputLabel htmlFor="my-input">Search Move</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Type the name of the move to search!</FormHelperText>
          </FormControl>
          {pokemon_moves ? <Pagination count={parseInt(pokemon_moves.results.length/itemsPerPage)} variant="outlined" shape="rounded" onChange={this.togglePageNumber} />
            : null
          }
          {pokemon_moves ? pokemon_moves.results.slice(startIndex, endIndex).map((item, index) => {
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
