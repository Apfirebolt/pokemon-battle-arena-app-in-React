import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { ListItem, CircularProgress, Button, Container, Box, FormHelperText,
  Input, InputLabel, FormControl } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import './main.scss';


class PokemonHomePage extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      startIndex: 0,
      endIndex: 20,
      pageNumbers: 0,
      itemsPerPage: 20,
      filterPokemon: '',
      filterResults: []
    }

    this.callApiData = this.callApiData.bind(this);
    this.togglePageNumber = this.togglePageNumber.bind(this);
    this.goToPokemonDetail = this.goToPokemonDetail.bind(this);
    this.filterPokemonFunction = this.filterPokemonFunction.bind(this);
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

  filterPokemonFunction(event) {
    let { pokemon } = this.props;
    let { filterPokemon, filterResults, pageNumbers, itemsPerPage } = this.state;
    let currentValue = event.target.value;
    let newFilteredResults = [];
    if(currentValue) {
      newFilteredResults = pokemon.results.filter((item) => {
        return item.name.indexOf(currentValue) !== -1
      })
    }
    else {
      newFilteredResults = pokemon.results;
    }
    this.setState({
      filterPokemon: currentValue,
      filterResults: newFilteredResults,
      pageNumbers: parseInt((newFilteredResults.length)/itemsPerPage)
    })
  }

  goToPokemonDetail(value) {
    this.props.history.push("/pokemon/detail/" + value);
  }

  callApiData() {
    this.props.getPokemonData();
    let { filterResults, pageNumbers, itemsPerPage } = this.state;
    let { pokemon } = this.props;

    if(pokemon && pokemon.results) {
      let newPageNumbers = parseInt((pokemon.results.length)/itemsPerPage);
      this.setState({
        pageNumbers: newPageNumbers,
        filteredResults: pokemon.results
      })
    }
  }

  componentDidMount() {
    this.callApiData();
  }
  
  render() {
    const { pokemon } = this.props;
    let { startIndex, endIndex, itemsPerPage, filterPokemon, filterResults } = this.state;
    return (
      <Box className="box-container">
        <h1>List Of Pokemon</h1>
        <FormControl>
          <InputLabel htmlFor="my-input">Search Pokemon By Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={filterPokemon} onChange={this.filterPokemonFunction} />
          <FormHelperText id="my-helper-text">Type the name of the pokemon to search!</FormHelperText>
        </FormControl>
        {pokemon ? <Pagination count={parseInt(filterResults.length/itemsPerPage)} variant="outlined" shape="rounded" onChange={this.togglePageNumber} />
        : null
        }

        {pokemon && filterResults ? filterResults.slice(startIndex, endIndex).map((item, index) => {
          return (
            <div key={index} className="pokemon_container">
              <ListItem>{item.name.toUpperCase()}</ListItem>

              <Button variant="outlined" color="primary" onClick={() => this.goToPokemonDetail(item.name)}>
                View Details
              </Button>
            </div>
          )
        })
        : <CircularProgress size={200} color={"secondary"} disableShrink />}
      </Box>
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