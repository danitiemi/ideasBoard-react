import React, { Component } from 'react';
import './styles/App.css';
import IdeasContainer from './components/IdeasContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><i className="fas fa-lightbulb"></i> My Brilliant Ideas</h1>
        </header>
        <IdeasContainer />
      </div>
    );
  }
}

export default App;
