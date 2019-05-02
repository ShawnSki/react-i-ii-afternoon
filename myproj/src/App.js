import React, { Component } from 'react';
import './App.css';
import data from './data'
import Card from './Components/Card'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: { first: "Waylin", last: "Lumsdon" },
      from: 'Texas',
      cardNum: 0,
      users: data.slice()
    }
  }

  render() {
    let userIndexArr = this.state.users[this.state.cardNum]
    return (
      <div className="App">
        <name />
        <header><h1>Home</h1></header>
        <Card
          userIndx={userIndexArr}
          usersArr={this.state.users}
          userId={this.state.cardNum} />

      </div>
    );
  }
}

export default App;

// Import data.js
// state = {
//   name: [...data.something] use a spread opperator
// }