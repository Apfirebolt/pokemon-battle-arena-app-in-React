import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import AccountsHomePage from './accountsHome';
import RegisterPage from './register';
import LoginPage from './login';
import accountStyles from './accountStyles.scss';



class AccountsRoutePage extends Component {
  constructor() {
    super();
    this.state = {
      pathPrefix: 'accounts'
    }

  }
  render() {
    const { pathPrefix } = this.state;
    return (
      <Router>
        <Switch>
          <Route name="login" path="/accounts/login" exact component={LoginPage} />
          <Route name="register" path="/accounts/register" exact component={RegisterPage} />
          <Route name="dashboard" path="" exact component={AccountsHomePage} />
        </Switch>
      </Router>
    )
  }
}

export default AccountsRoutePage;

