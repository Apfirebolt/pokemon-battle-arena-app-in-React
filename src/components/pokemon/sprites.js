import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Sprites = (props) => {

  return (
    <Fragment>
      <h2>Sprites component</h2>
      {Object.values(props.sprites).map((item, index) => {
        return (
          <img src={item} key={index} height="200" width="200"></img>
        )
      })
      }
    </Fragment>
  )
}

export default Sprites;