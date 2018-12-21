import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    name: 'Harish'
  }

  nameChangedHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.nameChangedHandler}
          name={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
      </div>
    );
  }
}

export default App;
