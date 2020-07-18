import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import './main.scss';

const DamageRelations = (props) => {
  return (
    <div className="damage_container">
      <h2>{props.heading.toUpperCase()}</h2>
      {props.itemArray.length ?
        <ul>
          {props.itemArray.map((item, index) => {
            return (
              <li key={index}>{item.name[0].toUpperCase() + item.name.substring(1)}</li>
            )
          })
          }
        </ul>
      : "NO Types"
      }
    </div>
  )
}

DamageRelations.propTypes = {
  heading: PropTypes.string.isRequired,
  itemArray: PropTypes.array.isRequired
}


export default DamageRelations;

