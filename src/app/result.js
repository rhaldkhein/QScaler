import React, { Component } from 'react';
import { connect } from 'react-redux';

const ops = {
  round(number) {
    return Math.round(number * 100) / 100;
  },
  scalePercent(sub, per) {
    return sub * (per * 0.01);
  },
  percentOf(sub, tar) {
    return tar / sub * 100;
  },
  getPercent(state) {
    if (state.scale_by === 'percent') {
      return state.scale_payload[0];
    } else if (state.scale_by === 'size') {
      if (state.scale_payload[0] > 0) {
        return ops.percentOf(state.base[0], state.scale_payload[0]); // Width
      } else {
        return ops.percentOf(state.base[1], state.scale_payload[1]); // Height
      }
    } else if (state.scale_by === 'area') {
      return ops.percentOf(state.base[0] * state.base[1], state.scale_payload[0]);
    }
  },
  width(state) {
    return ops.scalePercent(state.base[0], ops.getPercent(state));
  },
  height(state) {
    return ops.scalePercent(state.base[1], ops.getPercent(state));
  }
};

const stateProps = state => {
  return {
    base: state.base,
    scale_by: state.scale_by,
    scale_payload: state.scale_payload,
    width: ops.width(state) || 0, // New width
    height: ops.height(state) || 0 // New height
  };
};

class Result extends Component {
  render() {
    return (
      <div className="size-base mdl-shadow--4dp mw7 center mb4 br2 cf relative bg-white">
        <div className="fl w-10 bg-red absolute bottom-0 top-0 white br2 br--left">
          <h1>3</h1>
        </div>
        <div className="fr w-90 pa3">
          <div className="mdl-card__title pt0 pb4">
            <h2 className="mdl-card__title-text center">Scaled Size</h2>
          </div>
          <div className="mb4">
            <span className="mdl-chip mdl-chip--contact v-mid">
              <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">w</span>
              <span className="mdl-chip__text f3 ph3">{ops.round(this.props.width)}</span>
            </span>
            <span className="v-mid f4 mh3 db di-ns">x</span>
            <span className="mdl-chip mdl-chip--contact v-mid">
              <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">h</span>
              <span className="mdl-chip__text f3 ph3">{ops.round(this.props.height)}</span>
            </span>
            <span className="v-mid f4 mh3-l db di-l">=</span>
            <span className="mdl-chip mdl-chip--contact v-mid">
              <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">A</span>
              <span className="mdl-chip__text f3 ph3">{ops.round(this.props.width * this.props.height)}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(stateProps)(Result);
