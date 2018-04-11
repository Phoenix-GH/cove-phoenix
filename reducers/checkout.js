// @flow
/**
 * @module Reducers/Checkout
 * @desc Checkout Reducer
 */

import { handleActions } from 'redux-actions';
import { CheckoutConstants } from '../constants';
import { requestPending, requestSuccess, requestFail } from '../utils/request';

const initialState = {
  data: null,
  checkout: null,
  verifyContact: {
    data: null,
    pagination: null,
    error: null,
    isRunning: false,
    isLoaded: false,
  },
  verifyPhone: {
    data: null,
    pagination: null,
    error: null,
    isRunning: false,
    isLoaded: false,
  },
  createAccount: {
    data: null,
    pagination: null,
    error: null,
    isRunning: false,
    isLoaded: false,
  },
  createOrder: {
    data: null,
    pagination: null,
    error: null,
    isRunning: false,
    isLoaded: false,
  },
  completeOrder: {
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
    verifyContact: {
      ...action.payload,
    },
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
    verifyPhone: {
      ...action.payload,
    },
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
    createAccount: {
      ...action.payload,
    },
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
    createOrder: {
      ...action.payload,
    },
  }),
  [requestFail(CheckoutConstants.CREATE_ORDER)]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [requestPending(CheckoutConstants.COMPLETE_ORDER)]: state => ({
    ...state,
  }),
  [requestSuccess(CheckoutConstants.COMPLETE_ORDER)]: (state, action) => ({
    ...state,
    completeOrder: {
      ...action.payload,
    },
  }),
  [requestFail(CheckoutConstants.COMPLETE_ORDER)]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
}, initialState);
