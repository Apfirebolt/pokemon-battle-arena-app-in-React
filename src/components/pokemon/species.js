import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Species = (props) => {
  return (
    <Fragment>
      <h2>Species component</h2>
      <p>{props.species.name}</p>
      <p>{props.species.url}</p>
    </Fragment>
  )
}

export default Species;