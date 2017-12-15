import types from '../actionTypes';

const initialState = {
  cartItemIds: [],
  quantityById: {},
};

const cartItemIds = (state = initialState.cartItemIds, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
     console.log('ADD_TOCA')
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
    case types.ADD_TO_CART:
     console.log('ADD_TOCA')
      const { productId } = action;
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
    case types.UPDATE_QUANTIY: {
      const { productId, newQuantity } = action;
      return {
        ...state,
        [productId]: newQuantity,
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
  console.log('a', action)
  switch (action.type) {
    case types.CHECKOUT_REQUEST:
      return initialState;
    case types.CHECKOUT_FAILURE:
      return action.cart;
    case types.LOAD_PRODUCTS:{
      console.log('l')
      return ['b']
    }

    default:
      return {
        cartItemIds: cartItemIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;
