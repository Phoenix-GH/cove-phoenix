import { combineReducers } from 'redux';
import _ from 'lodash';
import { createAccountR, createOrderR, completeOrderR } from './routine';
import { getProductsR } from '../general/routine';
import types from '../actionTypes';

const initialState = {
  cartItemIds: [],
  productById: {},
  planDetails: {
    monitoringPlan: 1,
  },
  monitoringPlans: {
    1: {
      name: 'basic',
      price: 19.99,
    },
    2: {
      name: 'premium',
      price: 29.99,
    },
  },
  checkout: {},
};


const checkoutHandlers = {
  [createAccountR.TRIGGER]: state => ({ ...state, loading: true }),
  [createAccountR.SUCCESS]: (state, payload) => ({ ...state, ...payload }),
  [createAccountR.FAILURE]: (state, payload) => ({ ...state, error: payload }),
  [createAccountR.FULFILL]: state => ({ ...state, loading: false }),
  [createOrderR.TRIGGER]: state => ({ ...state, loading: true }),
  [createOrderR.SUCCESS]: (state, payload) => ({ ...state, ...payload }),
  [createOrderR.FAILURE]: (state, payload) => ({ ...state, error: payload }),
  [createOrderR.FULFILL]: state => ({ ...state, loading: false }),
  [completeOrderR.TRIGGER]: state => ({ ...state, loading: true }),
  [completeOrderR.SUCCESS]: (state, payload) => ({ ...state, ...payload }),
  [completeOrderR.FAILURE]: (state, payload) => ({ ...state, error: payload }),
  [completeOrderR.FULFILL]: state => ({ ...state, loading: false }),
};

const cartHandlers = {
  [types.ADD_TO_CART]: (state, { productId }) => {
    if (state.indexOf(productId) !== -1) {
      return state;
    }
    return [...state, productId];
  },
  [types.REMOVE_FROM_CART]: (state, { productId }) => {
    const newState = [...state];
    newState.splice(newState.indexOf(productId), 1);
    return newState;
  },
  [types.CLEAR_CART]: () => initialState.cartItemIds,
};

const productHandlers = {
  [types.UPDATE_QUANTITY]: (state, { productId, quantity }) => ({
    ...state,
    [productId]: { ...state[productId], quantity },
  }),
  [getProductsR.SUCCESS]: (state, payload) => {
    console.log('load products', payload) 
    if (_.isEmpty(state)) {
      const newState = _.keyBy(payload.sensor, 'id');
      return newState;
    }
    return state;
  },
};

const planHandlers = {
  [types.SELECT_SUBSCRIPTION_TYPE]: (state, { monitoringPlan }) => ({
    ...state,
    monitoringPlan,
  }),
  [createAccountR.SUCCESS]: (state, payload) => ({ ...state, tax: payload.tax }),
};

const cartItemIds = (state = initialState.cartItemIds, { type, payload }) => {
  if (cartHandlers[type]) {
    return cartHandlers[type](state, payload);
  }
  return state;
};

const productById = (state = initialState.productById, { type, payload }) => {
  if (productHandlers[type]) {
    return productHandlers[type](state, payload);
  }
  return state;
};

const checkout = (state = initialState.checkout, { type, payload }) => {
  if (checkoutHandlers[type]) {
    return checkoutHandlers[type](state, payload);
  }
  return state;
};

const planDetails = (state = initialState.planDetails, { type, payload }) => {
  if (planHandlers[type]) {
    return planHandlers[type](state, payload);
  }
  return state;
};

const monitoringPlans = (state = initialState.monitoringPlans) => state;
export default combineReducers({
  cartItemIds,
  productById,
  checkout,
  planDetails,
  monitoringPlans,
});
