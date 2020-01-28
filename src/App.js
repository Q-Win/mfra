import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi </h1>
        <Person name="Quinn" age ="31"/>
      </div>
    );
  }
}

export default App;
