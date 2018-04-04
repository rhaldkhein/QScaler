import React, { Component } from 'react';

class TextField extends Component {
  render() {
    return (
      <div
        className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${
          this.props.className || ''
        }`}
      >
        <input
          className="mdl-textfield__input"
          type="text"
          id={this.props.id || 'textfield_' + this.props.label}
        />
        <label
          className="mdl-textfield__label"
          htmlFor={this.props.id || 'textfield_' + this.props.label}
        >
          {this.props.label}
        </label>
      </div>
    );
  }
}

class NumberTextField extends Component {
  render() {
    return (
      <div
        className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${
          this.props.className || ''
        }`}
      >
        <input
          className="mdl-textfield__input"
          type="text"
          pattern="-?[0-9]*(\.[0-9]+)?"
          id={this.props.id || 'numtextfield_' + this.props.label}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <label
          className="mdl-textfield__label"
          htmlFor={this.props.id || 'numtextfield_' + this.props.label}
        >
          {this.props.label}
        </label>
        <span className="mdl-textfield__error">Input must be a number!</span>
      </div>
    );
  }
}

export { TextField, NumberTextField };
