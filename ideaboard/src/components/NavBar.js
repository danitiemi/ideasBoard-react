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
          <li><NavLink exact to="/">About</NavLink></li>
          <li><NavLink exact to="/ideas">Ideas</NavLink></li>
          <li><NavLink exact to="/">Login</NavLink></li>
          <li><NavLink exact to="/logout" onClick={this.logoutUser} >Logout</NavLink></li>
          {/* loggedIn={this.props.loggedIn}>Logout</NavLink></li> */}
        </ul>
      </div>
    )
  }
}

export default NavBar;


