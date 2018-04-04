import React, { Component } from 'react';

class Base extends Component {
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
              <span className="mdl-chip__text f3 ph3">0</span>
            </span>
            <span className="mdl-chip mdl-chip--contact mr3 v-mid">
              <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">h</span>
              <span className="mdl-chip__text f3 ph3">0</span>
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

export default Base;
