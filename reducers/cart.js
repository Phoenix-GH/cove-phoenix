import { combineReducers } from 'redux';
import types from '../actionTypes';

const initialState = {
  cartItemIds: [],
  quantityById: {},
};

const cartItemIds = (state = initialState.cartItemIds, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    case types.REMOVE_FROM_CART: {
      const newState = [...state];
      newState.splice(newState.indexOf(action.productId), 1);
      return newState;
    }
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case types.UPDATE_QUANTITY: {
      const { productId, quantity } = action;
      return {
        ...state,
        [productId]: quantity,
      };
    }
    default:
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getCartItemIds = state => state.cartItemIds;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECKOUT_REQUEST:
      return initialState;
    case types.CHECKOUT_FAILURE:
      return action.cart;
    default:
      return state;
  }
};

export default combineReducers({
  cartItemIds,
  quantityById,
  cart,
});
