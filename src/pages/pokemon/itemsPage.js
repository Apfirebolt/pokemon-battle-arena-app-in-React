import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { FormControl, Input, InputLabel, FormHelperText, CircularProgress, Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import './main.scss';

class PokemonItemsPage extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      startIndex: 0,
      endIndex: 20,
      pageNumbers: 1,
      itemsPerPage: 20,
      itemName: '',
      filterResults: []
    }
    this.displayFilterItems = this.displayFilterItems.bind(this);
    this.togglePageNumber = this.togglePageNumber.bind(this);
    this.goToMoveUrl = this.goToMoveUrl.bind(this);
  }

  displayFilterItems(event) {
    let currentValue = event.target.value;
    let { pokemon_items } = this.props;
    let { itemName, filterResults, pageNumbers, itemsPerPage } = this.state;
    let newFilteredResults = [];
    if(currentValue && pokemon_items) {
      newFilteredResults = pokemon_items.results.filter((item) => {
        return item.name.indexOf(currentValue) !== -1
      })
    }
    else {
      newFilteredResults = pokemon_items.results;
    }
    this.setState({
      itemName: currentValue,
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

  goToMoveUrl(passed_url) {
    let match = passed_url.match('\/[0-9]+');
    let item_id = match[0].substring(1);
    this.props.history.push("/pokemon/items/" + item_id);
  }

  componentDidMount() {
    this.props.getPokemonItemsData();
  }

  render() {
    const { pokemon_items } = this.props;
    let { startIndex, endIndex, itemsPerPage, itemName, filterResults, pageNumbers } = this.state;
    return (
      <Fragment>
        <div className="box-container">
          <h1>List of Items in Pokemon</h1>
          <FormControl>
            <InputLabel htmlFor="my-input">Search Item By Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={this.displayFilterItems} value={itemName} />
            <FormHelperText id="my-helper-text">Type the name of the item to search!</FormHelperText>
          </FormControl>
          {pokemon_items ? <Pagination count={pageNumbers} variant="outlined" shape="rounded" onChange={this.togglePageNumber} />
            : null
          }
          {pokemon_items ? filterResults.slice(startIndex, endIndex).map((item, index) => {
            return (
              <div className="pokemon_container" key={index}>
                <p>{item.name.toUpperCase()}</p>
                <Button onClick={() => {this.goToMoveUrl(item.url)}}>Item Details</Button>
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
    pokemon_items: state.pkmn.all_items,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPokemonItemsData: () => {
      dispatch(actionCreators.get_pokemon_items_util());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonItemsPage);
