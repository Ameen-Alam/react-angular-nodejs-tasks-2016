import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Customers />
      </div>
    );
  }
}

export default App;
