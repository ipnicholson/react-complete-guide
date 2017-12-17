import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name="Ian" age="99"/>
        <Person name="Steelhead" age="14">Hobbies: Spawning, Migrating</Person>
        <Person name="ABC" age="123"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi! I'm a nested element!`))
  }
}

export default App;
