import React from 'react';
import './App.scss';
import HeaderComponent from './layouts/header/header';
import FooterComponent from './layouts/footer/footer';
import AccountsRoutePage from './pages/accounts/accountRoutes';
import ChallengeRoutePage from './pages/challenge/challengeRoutes';
import DashboardComponent from './pages/dashboard';
import PokemonRoutesPage from './pages/pokemon/pokemonRoutes';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'

function App() {
  return (
    <div className="App">

      <ToastContainer/>
      <Router>
        <HeaderComponent/>
        <Switch>
          <Route path="/" exact component={DashboardComponent} />
          <Route path="/accounts" component={AccountsRoutePage} />
          <Route path="/challenge" component={ChallengeRoutePage} />
          <Route path="/pokemon" component={PokemonRoutesPage} />
        </Switch>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
