import React, { Component } from 'react';
import './App.css';
import AddressBarInputData from './AddressBarInputData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddressBarInputData />
        </header>
      </div>
    );
  }
}

export default App;
