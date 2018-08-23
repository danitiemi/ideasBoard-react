import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import IdeasContainer from './components/IdeasContainer'
import LoginScreen from './components/LoginScreen';
import IdeasContainer from './components/IdeasContainer';
import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage';

class App extends Component {

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
      // <div>
      //   <NavBar />
      // </div>

      <div className="App">
        <header className="App-header">
          <h1><i className="fas fa-lightbulb"></i> My Brilliant Ideas</h1>
        </header>
        <BrowserRouter>
          <div className="container">
            <NavBar />
            {/* <Route exact path="/" render={() => <HomePage />} */}
            <Route exact path="/ideas" component={IdeasContainer} />
            <Route exact path="/" component={LoginScreen} />
            {/* <Route path="/logout" component={LoginScreen} /> */}
          </div>
        </BrowserRouter>
        {/* <LoginScreen /> */}
       
      </div>
    );
  }
}

export default App
