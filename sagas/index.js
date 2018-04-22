import { all } from 'redux-saga/effects';
import checkoutNew from '../redux/checkout/saga';
import user from '../redux/user/saga';
import general from '../redux/general/saga';

export default function* () {
  yield all([
    checkoutNew(),
    user(),
    general(),
  ]);
}
