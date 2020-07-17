import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { ListItem, CircularProgress, Button, Container, Box } from '@material-ui/core';
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
      itemsPerPage: 20
    }

    this.togglePageNumber = this.togglePageNumber.bind(this);
    this.goToPokemonDetail = this.goToPokemonDetail.bind(this);
    this.getFilteredResults = this.getFilteredResults.bind(this);
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

  goToPokemonDetail(value) {
    this.props.history.push("/pokemon/detail/" + value);
  }

  getFilteredResults(results) {
    let { startIndex, endIndex } = this.state;

  }

  componentDidMount() {
    this.props.getPokemonData();
  }
  
  render() {
    const { pokemon } = this.props;
    let { startIndex, endIndex, itemsPerPage } = this.state;
    return (
      <Box className="box-container">
        <h1>List Of Pokemon</h1>
        {pokemon ? <Pagination count={parseInt(pokemon.results.length/itemsPerPage)} variant="outlined" shape="rounded" onChange={this.togglePageNumber} />
        : null
        }
        {pokemon ? pokemon.results.slice(startIndex, endIndex).map((item, index) => {
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