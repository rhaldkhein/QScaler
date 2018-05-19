import store from 'store';

// - START: Add all reducers below - - -

import { SET_BASE } from './setBase';
import { SET_SCALE_BY } from './setScaleBy';
import { SET_SCALE_PAYLOAD } from './setScalePayload';

const reducers = {
  SET_BASE,
  SET_SCALE_BY,
  SET_SCALE_PAYLOAD
};

// - END: Add all reducers above - - -

const defaultState = {
  base: [0, 0],
  scale_by: 'percent',
  scale_payload: ['']
};

const Operate = (state = store.get('state') || defaultState, action) => {
  let reducer = reducers[action.type];
  let newstate = reducer ? reducer(state, action.payload) : state;
  store.set('state', newstate);
  return newstate;
};

export default Operate;
