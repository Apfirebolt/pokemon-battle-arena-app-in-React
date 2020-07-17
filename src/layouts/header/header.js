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
            <li className="has_nested_items"><Link to="/pokemon">Pokemon</Link>
              <ul className="nested_list">
                <li><Link to="/pokemon/move">Pokemon Move List</Link></li>
                <li><Link to="/pokemon/items">Pokemon Items</Link></li>
                <li>Create Team</li>
              </ul>
            </li>

            <li><Link to="/accounts/register">Register</Link></li>
            <li><Link to="/accounts/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}