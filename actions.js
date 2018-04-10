// ACTIONS
import uuid from "uuid/v1";
import _ from 'lodash';
import types from './actionTypes';

export const actionTypes = {
  DATA_LOAD_SUCCESS: "DATA_LOAD_SUCCESS",

  SAVE_MY_DATA: "SAVE_MY_DATA"
};

export const saveMyData = data => {
  const id = uuid();
  return {type: actionTypes.SAVE_MY_DATA, payload: {[id]: data}};
};

export const loadSuccess = () => {
  return {type: actionTypes.DATA_LOAD_SUCCESS};
};
export const loadProducts = () => (dispatch, getState) => {
  if(_.isEmpty(getState().products)) {
    dispatch({ type: types.LOAD_PRODUCTS, products: coveProducts });
  }
}
export const addProductToCart = product => dispatch => dispatch({ type: types.ADD_PRODUCT_TO_CART, product: productId });

export const changeQuantity = (productId, previousQuantity, newQuantity) => (dispatch) => {
  if (newQuantity === 0) {
    dispatch({ type: types.REMOVE_FROM_CART, productId });
  } else if (previousQuantity === 0 && newQuantity === 1) {

    dispatch({ type: types.ADD_TO_CART, productId });
  }

  dispatch({ type: types.UPDATE_QUANTITY, productId, quantity: newQuantity });
};

export const toggleFinance = () => dispatch => dispatch({ type: types.TOGGLE_FINANCE });
export const selectSubscriptionType = subscription => dispatch => dispatch({ type: types.SELECT_SUBSCRIPTION_TYPE, subscription });


/* temp test data */
const coveProducts = [
  {
    id: 1,
    name: 'Cove Door',
    price: 15.00,
    description: "Cove door sensors are placed on each exterior door. When the door is left open, you’ll know about it. When someone enters the door with the alarm on, you will be notified immediately with our 24/7 monitoring station.",
  },
  {
    id: 2,
    name: 'Cove Window',
    price: 15.00,
    description: 'Cove Window description....',
  },
  {
    id: 3,
    name: 'Motion',
    price: 30.00,
    description: 'Cove Window description....',
  },
  {
    id: 4,
    name: 'Glass Break',
    price: 40.00,
    description: 'Cove Window description....',
  },
  {
    id: 5,
    name: 'Key Remote',
    price: 15.00,
    description: 'Cove Window description....',
  }
]
