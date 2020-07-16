import React, { Component, Fragment } from 'react';
import TeamPage from './TeamPage';
import DashboardPage from './dashboard';
import { Route, Switch } from 'react-router-dom';

class HomePage extends Component {
  constructor() {
    super();


  }
  render() {
    return (
      <Fragment>
        <h1>Home Page of the Pokemon React Application</h1>
        <Switch>
          <Route path="/team" component={TeamPage} />
          <Route path="/" exact component={DashboardPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default HomePage;