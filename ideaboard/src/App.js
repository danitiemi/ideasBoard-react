import React, { Component } from 'react';
import './styles/App.css';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
// import IdeasContainer from './components/IdeasContainer'
import LoginScreen from './components/LoginScreen';
import IdeasContainer from './components/IdeasContainer';

// AppPresenter({user })  {
//   return (
//     <div>
//       {user ? <IdeasContainer /> : <LoginScreen /> }
//     </div>
//   )
// }

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
      <div className="App">
        <header className="App-header">
          <h1><i className="fas fa-lightbulb"></i> My Brilliant Ideas</h1>
        </header>
        
        <LoginScreen />
        {/* <AppPresenter {...this.state} /> */}
      </div>
    );
  }
}

export default App
