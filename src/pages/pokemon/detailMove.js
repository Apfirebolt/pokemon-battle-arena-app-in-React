import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { CircularProgress, Typography } from '@material-ui/core';
import './main.scss';

class PokemonMoveDetailPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getMoveDetailData(params.move_id);
  }

  render() {
    const { move_data } = this.props;
    return (
      <Fragment>
        <div className="box-container">
          <h1>Move Details</h1>
          {move_data ?
              <div className="pokemon_move_container">
                <Typography variant="h2" component="h3" gutterBottom>
                  Name :- {move_data.name.toUpperCase()}
                </Typography>

                <p>Move Accruracy % :- {move_data.accuracy}</p>
                <p>Move Class :- {move_data.damage_class.name.toUpperCase()}</p>
                <p>Generation :- {move_data.generation.name}</p>
                <p>Move Type Name :- {move_data.type.name.toUpperCase()}</p>
                {move_data.effect_entries.map((item, index) => {
                  return (
                    <ul key={index}>
                      <li>{item.effect}</li>
                      <li>Language :- {item.language.name.toUpperCase()}</li>
                      <li>{item.short_effect}</li>
                    </ul>
                  )
                })
                }
              </div>
           : <CircularProgress size={200} color={"secondary"} disableShrink />}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    move_data: state.pkmn.single_move_data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getMoveDetailData: (move_id) => {
      dispatch(actionCreators.get_single_move_detail(move_id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMoveDetailPage);
