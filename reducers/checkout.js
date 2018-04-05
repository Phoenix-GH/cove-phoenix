// @flow
/**
 * @module Reducers/Applications
 * @desc Checkout Reducer
 */

import { handleActions } from 'redux-actions';
import { CheckoutConstants } from '../constants';
import { requestPending, requestSuccess, requestFail } from '../utils/request';

const initialState = {
  data: null,
  checkout: null,
  verifyContactHistory: {
    data: null,
    pagination: null,
    error: null,
    isRunning: false,
    isLoaded: false,
  },
  error: null,
  isRunning: false,
  isLoaded: false,
};

export default handleActions({
  [requestPending(CheckoutConstants.VERIFY_CONTACT)]: state => ({
    ...state,
  }),
  [requestSuccess(CheckoutConstants.VERIFY_CONTACT)]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [requestFail(CheckoutConstants.VERIFY_CONTACT)]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
  [requestPending(CheckoutConstants.VERIFY_PHONE)]: state => ({
    ...state,
  }),
  [requestSuccess(CheckoutConstants.VERIFY_PHONE)]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [requestFail(CheckoutConstants.VERIFY_PHONE)]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [requestPending(CheckoutConstants.CREATE_ACCOUNT)]: state => ({
    ...state,
  }),
  [requestSuccess(CheckoutConstants.CREATE_ACCOUNT)]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [requestFail(CheckoutConstants.CREATE_ACCOUNT)]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [requestPending(CheckoutConstants.CREATE_ORDER)]: state => ({
    ...state,
  }),
  [requestSuccess(CheckoutConstants.CREATE_ORDER)]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [requestFail(CheckoutConstants.CREATE_ORDER)]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
}, initialState);
