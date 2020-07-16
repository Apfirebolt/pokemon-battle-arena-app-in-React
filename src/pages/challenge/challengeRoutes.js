import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import ChallengeHomePage from './challengeHome';
import ChallengeSearchPage from './searchChallenger';


class ChallengeRoutePage extends Component {
  constructor() {
    super();
    this.state = {
      pathPrefix: 'challenge'
    }

  }
  render() {
    const { pathPrefix } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/challenge/search" exact component={ChallengeSearchPage} />
          <Route path="" exact component={ChallengeHomePage} />
        </Switch>
      </Router>
    )
  }
}

export default ChallengeRoutePage;

