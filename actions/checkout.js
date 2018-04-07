// @flow
/**
 * @module Actions/Checkout
 * @desc Actions for CHECKOUT
 */
import { createAction } from 'redux-actions';
import { CheckoutConstants } from '../constants';

// New action implementation
export const verifyContact = createAction(CheckoutConstants.VERIFY_CONTACT);
export const verifyPhone = createAction(CheckoutConstants.VERIFY_PHONE);
export const createAccount = createAction(CheckoutConstants.CREATE_ACCOUNT);
export const createOrder = createAction(CheckoutConstants.CREATE_ORDER);

