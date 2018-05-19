import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NumberTextField } from '../ui/TextField';

const stateProps = (state) => {
  return {
    width: state.base[0] || '', // width
    height: state.base[1] || '' // height
  };
};

const dispatchProps = (dispatch) => {
  return {
    setBase: (w, h) => {
      dispatch({ type: 'SET_BASE', payload: [parseFloat(w), parseFloat(h)] });
    }
  };
};

class Base extends Component {
  changeWidth(e) {
    this.props.setBase(e.target.value, this.props.height);
  }
  changeHeight(e) {
    this.props.setBase(this.props.width, e.target.value);
  }
  render() {
    return (
      <div className="size-base mdl-shadow--4dp mw7 center mb4 br2 cf relative bg-white">
        <div className="fl w-10 bg-blue absolute bottom-0 top-0 white br2 br--left">
          <h1>1</h1>
        </div>
        <div className="fr w-90 pa3">
          <div className="mdl-card__title pv0 pb2-l">
            <h2 className="mdl-card__title-text center">Base Size</h2>
          </div>
          <NumberTextField
            className="mr3 w-100 w-30-ns"
            id="basewidth"
            label="Width"
            value={this.props.width}
            onChange={this.changeWidth.bind(this)}
          />
          <NumberTextField
            className="mr2 w-100 w-30-ns"
            id="baseheight"
            label="Height"
            value={this.props.height}
            onChange={this.changeHeight.bind(this)}
          />
          <span className="nowrap">
            <span className="mdl-chip mdl-chip--contact ml3-ns v-mid">
              <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">A</span>
              <span className="mdl-chip__text f5 ph2">{this.props.width * this.props.height}</span>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default connect(stateProps, dispatchProps)(Base);
