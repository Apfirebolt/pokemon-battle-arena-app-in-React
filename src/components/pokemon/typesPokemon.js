import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  custom_btn: {
    color: "#FFF",
    margin: "1rem",
    fontSize: "1rem",
    fontWeight: "600"
  },
});

const TypesPokemon = (props) => {
  const classes = useStyles();

  const goToUrl = (value) =>  {
    props.history.push("/pokemon/detail/" + value);
  }

  return (
    <Fragment>
      <h1>ALL POKEMON OF {props.heading && props.heading.toUpperCase()} TYPE</h1>
      {props.itemArray && props.itemArray.length ?
        <ul>
          {props.itemArray.map((item, index) => {
            return (
              <Button variant="contained" className={classes.custom_btn} key={index} color="secondary"
                      onClick={() => {goToUrl(item.pokemon.name)}}>
                {item.pokemon.name}
              </Button>
            )
          })
          }
        </ul>
        : "NO Pokemon"
      }
    </Fragment>
  )
}

TypesPokemon.propTypes = {
  heading: PropTypes.string.isRequired,
  itemArray: PropTypes.array.isRequired,
  history: PropTypes.object
}

export default TypesPokemon;

