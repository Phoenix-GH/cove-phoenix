import { takeEvery, call } from 'redux-saga/effects';
import { request } from '../utils/request';
import { CheckoutConstants } from '../constants';
import { validatePhone } from '../redux/checkout/routine';

function* verifyContact(action) {
  yield call(request({
    type: CheckoutConstants.VERIFY_CONTACT,
    method: 'POST',
    url: '/meliae/verifyContact',
  }), action);
}

function* verifyPhone(action) {
  console.log('bbb', data , validatePhone.TRIGGER, action); 
  yield call(request({
    type: CheckoutConstants.VERIFY_PHONE,
    method: 'POST',
    url: '/meliae/verifyPhone',
  }), action);
}

function* createAccount(action) {
  yield call(request({
    type: CheckoutConstants.CREATE_ACCOUNT,
    method: 'POST',
    url: '/meliae/createAccount',
  }), action);
}

function* createOrder(action) {
  yield call(request({
    type: CheckoutConstants.CREATE_ORDER,
    method: 'POST',
    url: '/meliae/createOrder',
  }), action);
}

function* completeOrder(action) {
  yield call(request({
    type: CheckoutConstants.COMPLETE_ORDER,
    method: 'POST',
    url: '/meliae/completeOrder',
  }), action);
}

export default function* () {
  yield takeEvery(validatePhone.TRIGGER, verifyPhone);
  yield takeEvery('VERIFY_CONTACT', verifyContact);
  yield takeEvery('VERIFY_PHONE', verifyPhone);
  yield takeEvery('CREATE_ACCOUNT', createAccount);
  yield takeEvery('CREATE_ORDER', createOrder);
  yield takeEvery('COMPLETE_ORDER', completeOrder);
}
