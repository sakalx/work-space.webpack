import React       from 'react';
import { NavLink } from 'react-router-dom';

import LoginButton from './LoginButton.jsx';

const Nav = () => {
  return (
      <nav className="fr_c_cc">
        <ul className="fr_a_cc">
          <li>
            <NavLink exact activeClassName='link__active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='link__active' to='/about'>
              About
            </NavLink>
          </li>
        </ul>
        <NavLink to='/loginform'>
          Login
        </NavLink>
      </nav>
  );
};

export default Nav;