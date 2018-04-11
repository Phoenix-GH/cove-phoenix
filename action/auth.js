// @flow
/**
 * @module Actions/Auth
 * @desc Actions for Auth
 */
import { createAction } from 'redux-actions';
import { AuthConstants } from '../constants';

// New action implementation
export const authAction = createAction(AuthConstants.SESSION);
