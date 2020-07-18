import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { FormControl, Input, InputLabel, FormHelperText, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import './main.scss';

class SearchMovePage extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      startIndex: 0,
      endIndex: 20,
      pageNumbers: 1,
      itemsPerPage: 20,
      moveName: '',
      filterResults: []
    }
    this.displayFilterMoves = this.displayFilterMoves.bind(this);
    this.togglePageNumber = this.togglePageNumber.bind(this);
    this.moveSearchChanged = this.moveSearchChanged.bind(this);
  }

  displayFilterMoves(event) {
    let currentValue = event.target.value;
    let { pokemon_moves } = this.props;
    let { moveName, filterResults, pageNumbers, itemsPerPage } = this.state;
    let newFilteredResults = [];
    console.log('Event here is : ', event.target.value);
    if(currentValue && pokemon_moves) {
        newFilteredResults = pokemon_moves.results.filter((item) => {
          return item.name.indexOf(currentValue) !== -1
      })
    }
    else {
      newFilteredResults = pokemon_moves.results;
    }
    this.setState({
      moveName: currentValue,
      filterResults: newFilteredResults,
      pageNumbers: parseInt((newFilteredResults.length)/itemsPerPage)
    })
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

  moveSearchChanged(event) {
    console.log('More changed event ', event.target.value, this.state.filterResults);
    this.setState({
      moveName: event.target.value
    });
  }

  componentDidMount() {
    this.props.getPokemonMovesData();
  }

  render() {
    const { pokemon_moves } = this.props;
    let { startIndex, endIndex, itemsPerPage, moveName, filterResults, pageNumbers } = this.state;
    return (
      <Fragment>
        <div className="box-container">
          <h1>List of Pokemon Moves</h1>
          <FormControl>
            <InputLabel htmlFor="my-input">Search Pokemon By Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={this.displayFilterMoves} value={moveName} />
            <FormHelperText id="my-helper-text">Type the name of the pokemon move to search!</FormHelperText>
          </FormControl>
          {pokemon_moves ? <Pagination count={pageNumbers} variant="outlined" shape="rounded" onChange={this.togglePageNumber} />
            : null
          }
          {pokemon_moves ? filterResults.slice(startIndex, endIndex).map((item, index) => {
            return (
              <div className="pokemon_container" key={index}>
                <p>{item.name.toUpperCase()}</p>
                <Link to={`/pokemon/move/${index}`}>{item.url}</Link>
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
