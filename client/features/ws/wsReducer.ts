import { SET_WS } from '../../types/webSocket/webSocket';

const wsReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WS:
      return payload;
    default:
      return state;
  }
};

export default wsReducer;
