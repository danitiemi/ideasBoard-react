import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {

  logoutUser(event) {
    
    localStorage.removeItem('id_token')
  }
  
  render() {
    return (
      <div className="navContainer">
        <ul className='main-nav'>
          <li><NavLink exact to="#">About</NavLink></li>
          <li><NavLink exact to="/ideas">Ideas</NavLink></li>
          <li><NavLink exact to="/">Login</NavLink></li>
          <li><NavLink exact to="#" onClick={this.logoutUser} loggedIn={this.props.loggedIn}>Logout</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
