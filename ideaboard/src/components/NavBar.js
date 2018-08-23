import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navContainer">
    <ul className='main-nav'>
      <li><NavLink exact to="#">About</NavLink></li>
      <li><NavLink exact to="/ideas">Ideas</NavLink></li>
      <li><NavLink exact to="/">Login</NavLink></li>
      <li><NavLink exact to="#">Logout</NavLink></li>
    </ul>
  </div>
);

export default NavBar;
