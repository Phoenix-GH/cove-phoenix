// @flow
/**
 * @module Reducers/Checkout
 * @desc Checkout Reducer
 */

import { handleActions } from 'redux-actions';
import { AuthConstants } from '../constants';
import { requestPending, requestSuccess, requestFail } from '../utils/request';

const initialState = {
  error: null,
  isRunning: false,
  isLoaded: false,
};

export default handleActions({
  [requestPending(AuthConstants.SESSION)]: state => ({
    ...state,
  }),
  [requestSuccess(AuthConstants.SESSION)]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [requestFail(AuthConstants.SESSION)]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
}, initialState);
