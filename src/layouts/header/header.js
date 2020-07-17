import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyles.scss';

export default function SimpleMenu() {

  return (
    <nav className="navbar">
      <div className="left">
        <h2 className="brand">Pokemon Team Builder</h2>
      </div>
      <div className="right">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            <li><Link to="/accounts/register">Register</Link></li>
            <li><Link to="/accounts/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}