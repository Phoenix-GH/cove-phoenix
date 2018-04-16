import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';
import payment, * as fromPayment from './payment';
import customer, * as fromCustomer from './customer';
import checkoutRoutine from '../redux/checkout/reducer';
import user from '../redux/user/reducer';

export default combineReducers({
  cart,
  products,
  payment,
  customer,
  user,
  checkoutRoutine,
  form: formReducer,
});
