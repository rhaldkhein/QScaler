import React, { Component } from 'react';
import { connect } from 'react-redux';

const ops = {
  scalePercent(sub, per) {
    return sub * (per * 0.01);
  },
  percentOf(sub, tar) {
    return (tar / sub) * 100;
  },
  width(state) {
    if (state.scale_by === 'percent') {
      return ops.scalePercent(state.base[0], state.scale_payload[0]);
    } else if (state.scale_by === 'size') {
      // let perc = ops.percentOf(state.base[0], state.scale_payload[0]);
      return 0;
    } else if (state.scale_by === 'area') {
      return 0;
    }
  },
  height(state) {
    if (state.scale_by === 'percent') {
      return ops.scalePercent(state.base[0], state.scale_payload[0]);
    } else if (state.scale_by === 'size') {
      return 0;
    } else if (state.scale_by === 'area') {
      return 0;
    }
  }
};

const stateProps = (state) => {
  return {
    base: state.base,
    scale_by: state.scale_by,
    scale_payload: state.scale_payload,
    width: ops.width(state),
    height: ops.height(state)
  };
};

class Result extends Component {
  render() {
    return (
      <div className="size-base mdl-shadow--4dp mw7 center mb4 br2 cf relative">
        <div className="fl w-10 bg-red absolute bottom-0 top-0 white br2 br--left">
          <h1>3</h1>
        </div>
        <div className="fr w-90 pa3">
          <div className="mdl-card__title pt0 pb4">
            <h2 className="mdl-card__title-text center">Scaled Size</h2>
          </div>
          <div className="mb4">
            <span className="mdl-chip mdl-chip--contact mr3 v-mid">
              <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">w</span>
              <span className="mdl-chip__text f3 ph3">{this.props.width}</span>
            </span>
            <span className="mdl-chip mdl-chip--contact mr3 v-mid">
              <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">h</span>
              <span className="mdl-chip__text f3 ph3">{this.props.height}</span>
            </span>
            <span className="v-mid f4">=</span>
            <span className="mdl-chip mdl-chip--contact ml3 v-mid">
              <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">A</span>
              <span className="mdl-chip__text f3 ph3">0</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(stateProps)(Result);
