import React from 'react';
import './App.scss';
import HeaderComponent from './layouts/header/header';
import AccountsRoutePage from './pages/accounts/accountRoutes';
import ChallengeRoutePage from './pages/challenge/challengeRoutes';
import DashboardComponent from './pages/dashboard';
import PokemonRoutesPage from './pages/pokemon/pokemonRoutes';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <ToastContainer/>
      <Router>
        <Switch>
          <Route path="/" exact component={DashboardComponent} />
          <Route path="/accounts" component={AccountsRoutePage} />
          <Route path="/challenge" component={ChallengeRoutePage} />
          <Route path="/pokemon" component={PokemonRoutesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
