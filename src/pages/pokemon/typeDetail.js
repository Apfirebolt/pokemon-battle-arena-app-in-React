import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import DamageRelationComponent from '../../components/pokemon/damageRelations';
import PokemonTypesComponent from '../../components/pokemon/typesPokemon';
import MoveTypesComponent from '../../components/pokemon/typesMove';
import { CircularProgress, Typography, Button, Card, CardContent, CardActions, List, ListItem } from '@material-ui/core';
import './main.scss';

class PokemonTypeDetail extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getTypeDetail(params.type_name);
  }

  render() {
    const { pokemon_type, history } = this.props;
    return (
      <Fragment>
        <h1>Pokemon Type Detail</h1>

        {pokemon_type ?
          <div className="item_detail">
            <Card>
              <CardContent>
                <h1>{pokemon_type.name.toUpperCase()} TYPE</h1>
                <DamageRelationComponent
                  heading="Double Damage Taken From"
                  itemArray={pokemon_type.damage_relations.double_damage_from}
                />
                <DamageRelationComponent
                  heading="Double Damage Given To"
                  itemArray={pokemon_type.damage_relations.double_damage_to}
                />
                <DamageRelationComponent
                  heading="Half Damage Taken From"
                  itemArray={pokemon_type.damage_relations.half_damage_from}
                />
                <DamageRelationComponent
                  heading="Half Damage Given To"
                  itemArray={pokemon_type.damage_relations.half_damage_to}
                />
                <PokemonTypesComponent
                  heading={pokemon_type.name}
                  itemArray={pokemon_type.pokemon}
                  history={history}
                />
                <MoveTypesComponent
                  heading={pokemon_type.name}
                  itemArray={pokemon_type.moves}
                  history={history}
                />
              </CardContent>
            </Card>
          </div>
          : <CircularProgress size={200} color={"secondary"} disableShrink />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemon_type: state.pkmn.pokemon_type_detail,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getTypeDetail: (type_name) => {
      dispatch(actionCreators.get_pokemon_type_detail_data(type_name));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTypeDetail);
