import Router from 'next/router';
import _ from 'lodash';
import normalizeState from 'us-states-normalize';
import { getFormValues, touch, getFormMeta, getFormSyncErrors, isValid, getFormInitialValues } from 'redux-form';
import { put, call, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { validateContactR, createAccountR } from './routine';
import coveAPI from '../../utils/api';

const objectKeyToStr = (obj, resultArr, currentVal = '') => {
  _.each(obj, (val, key) => {
    const keyStr = currentVal ? `${currentVal}.${key}` : key;
    if (_.isObject(val)) {
      objectKeyToStr(val, resultArr, keyStr);
    } else {
      resultArr.push(keyStr);
    }
  });
};

const fieldsToFieldNameArray = (fields) => {
  const fieldNames = [];
  objectKeyToStr(fields, fieldNames);
  return fieldNames;
};

function getCreateAccountRequest(formData) {
  const accountRequest = _.cloneDeep(formData);
  accountRequest.customer1.phone = accountRequest.customer1.phone.split('-').join('');
  accountRequest.monitorAddress.state = normalizeState(accountRequest.monitorAddress.state);
  accountRequest.ec1.phone = accountRequest.ec1.phone.split('-').join('');
  accountRequest.ec2.phone = accountRequest.ec2.phone.split('-').join('');
  accountRequest.shipAddress = { use: 'monitorAddress' };
  accountRequest.billAddress = { use: 'monitorAddress' };

  console.log('select ',accountRequest)
  return accountRequest;
};

function* validateContact() {
  try {
    yield put(validateContactR.request());
    const response = call(coveAPI, { url: '/meliae/verifyContact', data: { phone: 8652071753 } });
  } catch (err) {
    yield put(validateContactR.failure());
  }
}

function* createAccount() {
  try {
    const fields =  yield select(getFormSyncErrors('checkout_customer'));
    const fieldNames = fieldsToFieldNameArray(fields);
    console.log('ccc',fields,fieldNames, yield select(isValid('checkout_customer')))
    yield put(createAccountR.request());
    if (yield select(isValid('checkout_customer'))) {
      const formData = yield select(getFormValues('checkout_customer'));
      const account = yield getCreateAccountRequest(formData);
      const response = yield call(coveAPI, { url: '/meliae/createAccount', method: 'POST', data: account });
      yield put(createAccountR.success(response.data));
      yield Router.push({ pathname: '/checkout', query: { stage: 'shipping' } });
    } else {
      yield put(touch('checkout_customer', ...fieldNames));
    }
  } catch (err) {
    yield put(createAccountR.failure(err));
  } finally {
    yield put(createAccountR.fulfill());
  }
}

export default function* () {
  yield takeEvery(validateContactR.TRIGGER, (data) => { console.log('aaaaa', data); });
  yield takeLatest(createAccountR.TRIGGER, createAccount);
}
