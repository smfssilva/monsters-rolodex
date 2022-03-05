import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Sivanilson'
    }
  }

  onClickHandler = () => {
    if (this.state.name === 'Silva') {
      this.setState({ name: 'Sivanilson' })
    } else {
      this.setState({ name: 'Silva' })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}
          </p>
          <button
            onClick={this.onClickHandler}
          >Change Name</button>
        </header>
      </div >
    )
  }
}

export default App;
