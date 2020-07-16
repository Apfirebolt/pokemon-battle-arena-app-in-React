import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Stats = (props) => {
  return (
    <Fragment>
      <h2>Stats component</h2>
      {props.stats && props.stats.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.base_stat}</p>
            <p>{item.effort}</p>
            <p>{item.stat.name}</p>
            <p>{item.stat.url}</p>
          </div>
        )
      })
      }
    </Fragment>
  )
}

export default Stats;