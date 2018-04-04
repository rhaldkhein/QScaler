import React, { Component } from 'react';
import { NumberTextField } from '../ui/TextField';

class Scaler extends Component {
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
              <a href="#scaleby-percent" className="mdl-tabs__tab is-active">
                Percent
              </a>
              <a href="#scaleby-size" className="mdl-tabs__tab">
                Size
              </a>
              <a href="#scaleby-area" className="mdl-tabs__tab">
                Area
              </a>
            </div>

            <div className="mdl-tabs__panel pt3 is-active" id="scaleby-percent">
              <NumberTextField className="mr2 w-70 w-40-ns" id="scalepercent" label="Percent" />
              <span className="v-mid f4">%</span>
            </div>
            <div className="mdl-tabs__panel pt3" id="scaleby-size">
              <NumberTextField className="mr3 w-100 w-30-ns" id="scalewidth" label="Width" />
              <NumberTextField className="mr2 w-100 w-30-ns" id="scaleheight" label="Height" />
            </div>
            <div className="mdl-tabs__panel pt3" id="scaleby-area">
              <NumberTextField className="mr2 w-70 w-40-ns" id="scalearea" label="Area" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scaler;
