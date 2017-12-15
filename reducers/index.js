import { combineReducers } from 'redux';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';

export default combineReducers({
  cart,
  products,
});
