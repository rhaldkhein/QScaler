import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NumberTextField } from '../ui/TextField';

const stateProps = (state) => {
  return {
    scale_by: state.scale_by,
    scale_payload: state.scale_payload
  };
};

const dispatchProps = (dispatch) => {
  return {
    setScaleBy: (by) => {
      dispatch({ type: 'SET_SCALE_BY', payload: by });
    },
    setScalePayload: (...args) => {
      dispatch({ type: 'SET_SCALE_PAYLOAD', payload: args });
    }
  };
};

class Scaler extends Component {
  isActive(by, prefix = '') {
    return prefix + (this.props.scale_by === by ? ' is-active' : '');
  }
  changePercent(e) {
    this.props.setScaleBy('percent');
    this.props.setScalePayload(parseFloat(e.target.value) || 0);
  }
  changeSizeWidth(e) {
    this.props.setScaleBy('size');
    this.props.setScalePayload(parseFloat(e.target.value) || 0, 0);
  }
  changeSizeHeight(e) {
    this.props.setScaleBy('size');
    this.props.setScalePayload(0, parseFloat(e.target.value) || 0);
  }
  changeArea(e) {
    this.props.setScaleBy('area');
    this.props.setScalePayload(parseFloat(e.target.value) || 0);
  }
  render() {
    return (
      <div className="size-base mdl-shadow--4dp mw7 center mb4 br2 cf relative">
        <div className="fl w-10 bg-green absolute bottom-0 top-0 white br2 br--left">
          <h1>2</h1>
        </div>
        <div className="fr w-90 pa3">
          <div className="mdl-card__title pv0 pb2-l">
            <h2 className="mdl-card__title-text center">Scale By</h2>
          </div>

          <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
            <div className="mdl-tabs__tab-bar">
              <a href="#scaleby-percent" className={this.isActive('percent', 'mdl-tabs__tab')}>
                Percent
              </a>
              <a href="#scaleby-size" className={this.isActive('size', 'mdl-tabs__tab')}>
                Size
              </a>
              <a href="#scaleby-area" className={this.isActive('area', 'mdl-tabs__tab')}>
                Area
              </a>
            </div>

            <div className={this.isActive('percent', 'mdl-tabs__panel pt3')} id="scaleby-percent">
              <NumberTextField
                className="mr2 w-70 w-40-ns"
                id="scalepercent"
                label="Percent"
                value={this.isActive('percent') ? this.props.scale_payload[0] || '' : ''}
                onChange={this.changePercent.bind(this)}
              />
              <span className="v-mid f4">%</span>
            </div>
            <div className={this.isActive('size', 'mdl-tabs__panel pt3')} id="scaleby-size">
              <NumberTextField
                className="mr3 w-100 w-30-ns"
                id="scalewidth"
                label="Width"
                value={this.isActive('size') ? this.props.scale_payload[0] || '' : ''}
                onChange={this.changeSizeWidth.bind(this)}
              />
              <NumberTextField
                className="mr2 w-100 w-30-ns"
                id="scaleheight"
                label="Height"
                value={this.isActive('size') ? this.props.scale_payload[1] || '' : ''}
                onChange={this.changeSizeHeight.bind(this)}
              />
            </div>
            <div className={this.isActive('area', 'mdl-tabs__panel pt3')} id="scaleby-area">
              <NumberTextField
                className="mr2 w-70 w-40-ns"
                id="scalearea"
                label="Area"
                value={this.isActive('area') ? this.props.scale_payload[0] || '' : ''}
                onChange={this.changeArea.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(stateProps, dispatchProps)(Scaler);
