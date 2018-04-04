import React, { Component } from 'react';
import Base from './base';
import Scaler from './scaler';
import Result from './result';

class App extends Component {
  render() {
    return (
      <div className="tc pa3">
        <header className="header">
          <h2 className="title">Quick Proportional Scaler</h2>
        </header>
        <Base />
        <Scaler />
        <Result />
      </div>
    );
  }
}

export default App;
