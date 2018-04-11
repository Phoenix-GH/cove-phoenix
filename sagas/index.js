import { all } from 'redux-saga/effects';
import checkoutSaga from './checkout';
import authSaga from './auth';

export default function* () {
  yield all([
    authSaga(),
    checkoutSaga(),
  ]);
}
