import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { ListItem, CircularProgress, Button, Container, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';


class PokemonHomePage extends Component {
  constructor() {
    super();
    this.state = {
      startIndex: 0,
      endIndex: 20,
      pageNumbers: 0
    }

    this.togglePageNumber = this.togglePageNumber.bind(this);
    this.goToPokemonDetail = this.goToPokemonDetail.bind(this);
  }

  togglePageNumber() {
    console.log('Next previous buttons..');
  }

  goToPokemonDetail(value) {
    this.props.history.push("/pokemon/detail/" + value);
  }

  componentDidMount() {
    this.props.getPokemonData();
  }
  
  render() {
    const { pokemon } = this.props;
    return (
      <Box className="box-container">
        <h1>List Of Pokemon</h1>
        {pokemon ? <Pagination count={parseInt(pokemon.results.length/10)} variant="outlined" shape="rounded" onChange={this.togglePageNumber} />
        : null
        }
        {pokemon ? pokemon.results.map((item, index) => {
          return (
            <div key={index}>
              <ListItem>{item.name}</ListItem>

              <Button variant="outlined" color="secondary" onClick={() => this.goToPokemonDetail(item.name)}>
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