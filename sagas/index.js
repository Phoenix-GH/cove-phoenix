import { all } from 'redux-saga/effects';
import checkoutNew from '../redux/checkout/saga';
import user from '../redux/user/saga';

export default function* () {
  yield all([
    checkoutNew(),
    user(),
  ]);
}
