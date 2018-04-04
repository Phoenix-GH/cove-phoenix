import { all } from 'redux-saga/effects';
import { checkoutSaga } from './checkout';

export default function* () {
  yield all([
    checkoutSaga(),
  ]);
}
