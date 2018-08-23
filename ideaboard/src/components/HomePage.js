import React, { Component } from 'react';
// import LoginScreen from './components/LoginScreen';
// import IdeasContainer from './components/IdeasContainer';
import NavBar from './NavBar.js'

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: false,
      loggedIn: false,
      ideas: '',
      updatingIdeas: false
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><i className="fas fa-lightbulb"></i> My Brilliant Ideas</h1>
        </header>        
      </div>
    );
  }
}

export default HomePage
