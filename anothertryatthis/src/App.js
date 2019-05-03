import React, { Component } from 'react';
// import './reset.css'
import './App.css';
import data from './data'


//Components
import Navbar from './Components/Navbar/Navbar'
import Card from './Components/Card/Card'
import Controls from './Components/Controls/Controls'

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: data,
      userIndex: 0
    }
  }

  nextPage = () => {
    if (this.state.userIndex === 24) {
      this.setState({
        userIndex: 0
      })
    } else {
      this.setState({
        userIndex: this.state.userIndex + 1
      })
    }
  }

  prevPage = () => {
    if (this.state.userIndex === 0) {
      this.setState({
        userIndex: 24
      })
    } else {
      this.setState({
        userIndex: this.state.userIndex - 1
      })
    }
  }

  
  render() {
    console.log(this.state.userIndex)
    return (
      <div className='app-container'>
        <Navbar />
        <Card
          usersNameFirst={this.state.users[this.state.userIndex].name.first}
          usersNameLast={this.state.users[this.state.userIndex].name.last}
          usersPageNum={this.state.userIndex}
          usersFrom={this.state.users[this.state.userIndex].country}
          usersTitle={this.state.users[this.state.userIndex].title}
          usersEmployer={this.state.users[this.state.userIndex].employer} />
        <Controls
          usersNext={this.nextPage}
          usersPrev={this.prevPage} />
      </div>
    );

  }
}

export default App;
