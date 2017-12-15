import { combineReducers } from 'redux';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';
import payment, * as fromPayment from './payment';
import customer, * as fromCustomer from './customer';

export default combineReducers({
  cart,
  products,
  payment,
  customer,
});
