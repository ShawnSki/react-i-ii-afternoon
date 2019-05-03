import React, { Component } from 'react';
import './App.css';
import data from './data'
import Card from './Components/Card'
import Navigation from './Components/Navigation'

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
  movieListItems = () => {
    console.log(this.usermovies)
  }
  
  render() {
    
    let userObj = this.state.users[this.state.cardNum]
    let listMovies = this.state.users[this.state.cardNum].favoriteMovies
    // console.log(userObj)
    return (
      <div className="App">
        <header><h1>Home</h1></header>
        <Card
          userObject={userObj}
          usersArr={this.state.users}
          userCount={this.state.cardNum}
          userMovies={listMovies} />
        <Navigation />
      </div>
    );
  }
}

export default App;

// Import data.js
// state = {
//   name: [...data.something] use a spread opperator
// }