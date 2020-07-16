import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Moves = (props) => {
  return (

    <Fragment>
      <p>Moves component</p>
      {props.moves && props.moves.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.move.name}</p>
            <p>{item.move.url}</p>
          </div>
        )
      })
      }
    </Fragment>
  )
}

export default Moves;