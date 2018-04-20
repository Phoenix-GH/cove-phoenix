import { combineReducers } from 'redux';
import { createAccountR } from './routine';

const initialState = {
  cartItemIds: [],
  quantityById: {},
  checkout: {},
};

const handlers = {
  [createAccountR.TRIGGER]: state => ({ ...state, loading: true }),
  [createAccountR.SUCCESS]: (state, payload) => ({ ...state, ...payload }),
  [createAccountR.FAILURE]: (state, payload) => ({ ...state, error: payload }),
  [createAccountR.FULFILL]: state => ({ ...state, loading: false }),
};

const cartItemIds = (state = initialState.cartItemIds, { type, payload }) => {
  if (handlers[type]) {
    return handlers[type](state, payload);
  }
  return state;
};

const quantityById = (state = initialState.quantityById, { type, payload }) => {
  if (handlers[type]) {
    return handlers[type](state, payload);
  }
  return state;
};

const checkout = (state = initialState.checkout, { type, payload }) => {
  if (handlers[type]) {
    return handlers[type](state, payload);
  }
  return state;
};

export default combineReducers({
  cartItemIds,
  quantityById,
  checkout,
});
