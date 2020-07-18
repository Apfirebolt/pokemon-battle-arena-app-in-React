import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';

const useStyles = makeStyles({
  custom_btn: {
    color: "#000",
    margin: "1rem",
    fontSize: "1rem",
    fontWeight: "600"
  },
});


const TypesMoves = (props) => {
  const classes = useStyles();

  const goToUrl = (value) =>  {
    props.history.push("/pokemon/detail/" + value);
  }

  return (
    <Fragment>
      <h1>ALL MOVES OF {props.heading.toUpperCase()} TYPE</h1>
      {props.itemArray.length ?
        <ul>
          {props.itemArray.map((item, index) => {
            return (
              <Button key={index} color="primary" className={classes.custom_btn}>{item.name}</Button>
            )
          })
          }
        </ul>
        : "NO Moves"
      }

    </Fragment>
  )
}

TypesMoves.propTypes = {
  heading: PropTypes.string.isRequired,
  itemArray: PropTypes.array.isRequired,
  history: PropTypes.object
}

export default TypesMoves;

