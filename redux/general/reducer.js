import { combineReducers } from 'redux';
import { getProductsR } from './routine';

const initialState = {
  products: {
    data: { sensors: [] },
  },
};

const productHandlers = {
  [getProductsR.TRIGGER]: state => ({ ...state, loading: true }),
  [getProductsR.SUCCESS]: (state, payload) => ({ ...state, data: payload }),
  [getProductsR.FAILURE]: (state, payload) => ({ ...state, error: payload }),
  [getProductsR.FULFILL]: state => ({ ...state, loading: false }),
};

const products = (state = initialState.products, { type, payload }) => {
  if (productHandlers[type]) {
    return productHandlers[type](state, payload);
  }
  return state;
};

export default combineReducers({
  products,
});
