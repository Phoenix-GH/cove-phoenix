import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import _ from 'lodash';
import reducer from './reducers'


export const actionTypes = {
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
  CHANGE_QUANTITY: 'CHANGE_QUANTITY',
};


// ACTIONS
export const addProductToCart = product => dispatch => dispatch({ type: actionTypes.ADD_PRODUCT_TO_CART, product: productId });

export const changeQuantity = (productId, previousQuantity, newQuantity) => (dispatch) => {
  console.log('changeQuantity action', productId, quantity, dispatch);
  if (newQuantity === 0) {
    dispatch({ type: actionTypes.REMOVE_PRODUCT_FROM_CART, product: productId });
  } else if (previousQuantity === 0 && newQuantity === 1) {
    dispatch({ type: actionTypes.ADD_PRODUCT_TO_CART, product: productId });
  }

  dispatch({ type: actionTypes.CHANGE_QUANTITY, product: productId, quantity: newQuantity });
};

export const initStore = initialState => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
