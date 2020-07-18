import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { CircularProgress, Typography, Button, Card, CardContent, CardActions } from '@material-ui/core';
import './main.scss';

class PokemonTypesPage extends Component {
  constructor() {
    super();
    this.state = {

    }
    this.changeUrl = this.changeUrl.bind(this);
  }

  changeUrl(type_name) {
    this.props.history.push("/pokemon/types/" + type_name);
  }


  componentDidMount() {
    this.props.getPokemonTypesData();

  }

  render() {
    const { pokemon_types } = this.props;
    return (
      <Fragment>
        <h1>Pokemon Types data page</h1>
        {pokemon_types ? pokemon_types.results.map((item, index) => {
            return (
              <Card variant="outlined" className="type_container" key={index} >
                <CardContent>
                  <Typography color="textSecondary" variant="h5" component="h5">
                    {item.name.toUpperCase() + ' TYPE'}
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => {this.changeUrl(item.name)}}>View Type Details</Button>
                </CardActions>
              </Card>
            )
          })
        : <CircularProgress size={200} color={"secondary"} disableShrink />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemon_types: state.pkmn.pokemon_types,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPokemonTypesData: () => {
      dispatch(actionCreators.get_pokemon_types_data());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTypesPage);
