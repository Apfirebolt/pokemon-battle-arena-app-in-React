import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Forms = (props) => {
  return (
    <Fragment>
      <h2>Forms component</h2>
      {props.forms && props.forms.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.url}</p>
          </div>
        )
      })
      }
    </Fragment>
  )
}

export default Forms;