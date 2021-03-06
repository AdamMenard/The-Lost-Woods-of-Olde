import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Lost Woods</h1>
        </header>
        <p className="App-intro">
        </p>
        { MyRoutes }
        <br/>
      </div>
    );
  }
}

export default App;
