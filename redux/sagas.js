import { all } from 'redux-saga/effects';
import checkoutNew from './checkout/saga';
import user from './user/saga';
import general from './general/saga';

export default function* () {
  yield all([
    checkoutNew(),
    user(),
    general(),
  ]);
}
