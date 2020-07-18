import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/reducers/pokemon/pokemonActions';
import { CircularProgress, Typography, Button, Card, CardContent, CardActions, List, ListItem } from '@material-ui/core';
import './main.scss';

class ItemDetailPage extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getItemDetail(params.item_id);
  }

  componentDidUpdate() {
    console.log('Updated : ', this.props.single_item);
  }

  render() {
    const { single_item } = this.props;
    return (
      <Fragment>
        <h1>Item Detail</h1>

        {single_item ?
              <div className="item_detail">
                <Card>
                  <CardContent>
                    <h1>{single_item.name.toUpperCase()}</h1>
                    <h2>Item cost is {single_item.cost}</h2>
                    <h3>Item categity is {single_item.category.name}</h3>
                    <h3>Item Use Details given below :-</h3>
                    {single_item.effect_entries.map((item, index) => {
                      return (
                        <List color="secondary">
                          <ListItem>{item.effect}</ListItem>
                          <ListItem>Language : {item.language.name.toUpperCase()}</ListItem>
                          <ListItem>{item.short_effect}</ListItem>
                        </List>
                      )
                    })

                    }
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
    single_item: state.pkmn.single_item_data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getItemDetail: (item_id) => {
      dispatch(actionCreators.get_item_detail_data(item_id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailPage);
