export const SET_BASE = (state, payload) => {
  payload[0] = payload[0] || 0;
  payload[1] = payload[1] || 0;
  return {
    ...state,
    base: payload
  };
};
