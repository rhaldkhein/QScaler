import store from 'store';

// - START: Add all reducers below - - -

import { SET_BASE } from './setBase';

const reducers = {
  SET_BASE
};

// - END: Add all reducers above - - -

const defaultState = {
  base: [0, 0]
};

const Operate = (state = store.get('state') || defaultState, action) => {
  let reducer = reducers[action.type];
  let newstate = reducer ? reducer(state, action.payload) : state;
  store.set('state', newstate);
  return newstate;
};

export default Operate;
