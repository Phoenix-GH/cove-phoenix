import { combineReducers } from 'redux';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';
import payment, * as fromPayment from './payment';
import customer, * as fromCustomer from './customer';
import checkout, * as fromCheckout from './checkout';
import session, * as fromSession from './auth';

export default combineReducers({
  session,
  cart,
  products,
  payment,
  customer,
  checkout,
});
