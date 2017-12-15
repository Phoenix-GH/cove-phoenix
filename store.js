import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import _ from 'lodash';
import reducer from './reducers';
import  types from './actionTypes';


// ACTIONS
export const loadProducts = () => (dispatch, getState) => {
  if(_.isEmpty(getState().products)) {
    console.log('test', dispatch)
    dispatch({ type: types.LOAD_PRODUCTS, products: coveProducts });
  }
}
export const addProductToCart = product => dispatch => dispatch({ type: types.ADD_PRODUCT_TO_CART, product: productId });

export const changeQuantity = (productId, previousQuantity, newQuantity) => (dispatch) => {
  if (newQuantity === 0) {
    dispatch({ type: types.REMOVE_FROM_CART, product: productId });
  } else if (previousQuantity === 0 && newQuantity === 1) {
    console.log('changeQuantity action', productId, previousQuantity, dispatch);

    dispatch({ type: types.ADD_TO_CART, product: productId });
  }

  //dispatch({ type: types.CHANGE_QUANTITY, product: productId, quantity: newQuantity });
};

export const initStore = initialState => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));


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
