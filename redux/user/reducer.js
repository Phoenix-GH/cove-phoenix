import { combineReducers } from 'redux';
import { tokenRoutine } from './routine';

const initialState = {
  auth: {
    loggedIn: false,
  },
  data: {},
};

const handlers = {
  [tokenRoutine.TRIGGER]: state => ({ ...state, loading: true }),
  [tokenRoutine.SUCCESS]: (state, payload) => ({ ...state, token: payload }),
  [tokenRoutine.FAILURE]: (state, payload) => ({ ...state, error: payload }),
  [tokenRoutine.FULFILL]: state => ({ ...state, loading: false }),
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
