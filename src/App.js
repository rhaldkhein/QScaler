import React, { Component } from 'react';
import { NumberTextField } from './ui/TextField';

class App extends Component {
  render() {
    return (
      <div className="tc pa3">
        <header className="header">
          <h2 className="title">Quick Proportional Scaler</h2>
        </header>
        <div className="size-base mdl-shadow--4dp mw7 center mb4 br2 cf relative">
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
            />
            <NumberTextField
              className="mr2 w-100 w-30-ns"
              id="baseheight"
              label="Height"
            />
            <span className="nowrap">
              <span className="mdl-chip mdl-chip--contact ml3 v-mid">
                <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">
                  A
                </span>
                <span className="mdl-chip__text f5 ph2">0</span>
              </span>
            </span>
          </div>
        </div>
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

              <div
                className="mdl-tabs__panel pt3 is-active"
                id="scaleby-percent"
              >
                <NumberTextField
                  className="mr2 w-70 w-40-ns"
                  id="scalepercent"
                  label="Percent"
                />
                <span className="v-mid f4">%</span>
              </div>
              <div className="mdl-tabs__panel pt3" id="scaleby-size">
                <NumberTextField
                  className="mr3 w-100 w-30-ns"
                  id="scalewidth"
                  label="Width"
                />
                <NumberTextField
                  className="mr2 w-100 w-30-ns"
                  id="scaleheight"
                  label="Height"
                />
              </div>
              <div className="mdl-tabs__panel pt3" id="scaleby-area">
                <NumberTextField
                  className="mr2 w-70 w-40-ns"
                  id="scalearea"
                  label="Area"
                />
              </div>
            </div>
          </div>
        </div>
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
                <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">
                  w
                </span>
                <span className="mdl-chip__text f3 ph3">0</span>
              </span>
              <span className="mdl-chip mdl-chip--contact mr3 v-mid">
                <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">
                  h
                </span>
                <span className="mdl-chip__text f3 ph3">0</span>
              </span>
              <span className="v-mid f4">=</span>
              <span className="mdl-chip mdl-chip--contact ml3 v-mid">
                <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">
                  A
                </span>
                <span className="mdl-chip__text f3 ph3">0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
