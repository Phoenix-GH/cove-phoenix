import { takeEvery, call } from 'redux-saga/effects';
import { request } from '../utils/request';
import { CheckoutConstants } from '../constants';

function* verifyContact(action) {
  yield call(request({
    type: CheckoutConstants.VERIFY_CONTACT,
    method: 'POST',
    url: 'url',
  }), action);
}

function* verifyPhone(action) {
  yield call(request({
    type: CheckoutConstants.VERIFY_PHONE,
    method: 'POST',
    url: 'url',
  }), action);
}

function* createAccount(action) {
  yield call(request({
    type: CheckoutConstants.CREATE_ACCOUNT,
    method: 'POST',
    url: 'url',
  }), action);
}

function* createOrder(action) {
  yield call(request({
    type: CheckoutConstants.CREATE_ORDER,
    method: 'POST',
    url: 'url',
  }), action);
}

export default function* () {
  yield takeEvery('VERIFY_CONTACT', verifyContact);
  yield takeEvery('VERIFY_PHONE', verifyPhone);
  yield takeEvery('CREATE_ACCOUNT', createAccount);
  yield takeEvery('CREATE_ORDER', createOrder);
}
