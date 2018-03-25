import React, { Component } from 'react';
import { NumberTextField } from './ui/TextField';

class App extends Component {
  render() {
    return (
      <div className="tc">
        <header className="header">
          <h2 className="title">Quick Proportional Scaler</h2>
        </header>
        <div className="size-base mw7 center ba b--light-silver br3">
          <h5 className="mv3">Base Size</h5>
          <NumberTextField className="mr3 w5" id="basewidth" label="Width" />
          <NumberTextField className="mr2 w5" id="baseheight" label="Height" />
          <span> = 30,000 Area</span>
        </div>
      </div>
    );
  }
}

export default App;
