import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Abilities = (props) => {
  return (
    <Fragment>
      <h2>Abilities component</h2>
      {props.abilities.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.ability.name}</p>
            <p>{item.ability.url}</p>
          </div>
        )
      })}
    </Fragment>
  )
}


export default Abilities;