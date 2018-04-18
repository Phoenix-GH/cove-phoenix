import { combineReducers } from 'redux';
import { tokenR } from './routine';

const initialState = {
  auth: {
    loggedIn: false,
  },
  data: {},
};

const handlers = {
  [tokenR.TRIGGER]: state => ({ ...state, loading: true }),
  [tokenR.SUCCESS]: (state, payload) => ({ ...state, token: payload }),
  [tokenR.FAILURE]: (state, payload) => ({ ...state, error: payload }),
  [tokenR.FULFILL]: state => ({ ...state, loading: false }),
};

const auth = (state = initialState.auth, { type, payload }) => {
  if (handlers[type]) {
    return handlers[type](state, payload);
  }
  return state;
};

const data = (state = initialState.data, { type, payload }) => {
  if (handlers[type]) {
    return handlers[type](state, payload);
  }
  return state;
};

export default combineReducers({
  auth,
  data,
});
