import Router from 'next/router';
import _ from 'lodash';
import normalizeState from 'us-states-normalize';
import { getFormValues, touch, getFormMeta, getFormSyncErrors, isValid, getFormInitialValues } from 'redux-form';
import { put, call, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { validateContactR, createAccountR, createOrderR, getProductsR } from './routine';
import { getCart } from './selector';
import coveAPI from '../../utils/api';

const objectKeyToStr = (obj, resultArr, counter = 0, currentVal = '') => {
  _.each(obj, (val, key) => {
    const keyStr = currentVal ? `${currentVal}.${key}` : key;
    if (counter < 300 && _.isObject(val)) {
      const newCount = counter + 1;
      objectKeyToStr(val, resultArr, newCount, keyStr);
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


const getCreateAccountRequest = (formData, cart) => {
  console.log('formdata', formData);
  const accountRequest = _.cloneDeep(formData);
  accountRequest.customer1.phone = accountRequest.customer1.phone.split('-').join('');
  accountRequest.monitorAddress.state = normalizeState(accountRequest.monitorAddress.state);
  accountRequest.ec1 = {};
  accountRequest.ec1.firstName = accountRequest.customer1.firstName;
  accountRequest.ec1.lastName = accountRequest.customer1.lastName;
  [accountRequest.ec2.firstName, accountRequest.ec2.lastName] = accountRequest.ec2.name.split(' ');
  accountRequest.ec2.phone = accountRequest.ec2.phone.split('-').join('');
  if (formData.includeEc3) {
    [accountRequest.ec3.firstName, accountRequest.ec3.lastName] = accountRequest.ec3.name.split(' ');
    accountRequest.ec3.phone = accountRequest.ec3.phone.split('-').join('');
  }
  delete accountRequest.includeEc3;
  accountRequest.shipAddress = { use: 'monitorAddress' };
  accountRequest.billAddress = { use: 'monitorAddress' };
  const items = [{
    name: 'Cove Protect Package',
    price: '249.00',
    qty: 1,
  }];

  for (let i = 0; i < cart.cartItemIds.length; i += 1) {
    const id = cart.cartItemIds[i];
    items.push({
      name: cart.productById[id].display_name,
      qty: cart.productById[id].qty,
      price: cart.productById[id].price,
    });
  }

  const cartRequest = {
    rmr: cart.monitoringPlans[cart.planDetails.monitoringPlan].price,
    items,
  };
  accountRequest.cart = cartRequest;
  console.log('select ',accountRequest)
  return accountRequest;
};

const getCreateOrderRequest = (formData, cart) => {
  const shipAddress = formData.differentShipAddress ? formData.shipAddress : {};
  const items = [];

  for (let i = 0; i < cart.cartItemIds.length; i += 1) {
    const id = cart.cartItemIds[i];
    items.push({
      name: cart.productById[id].display_name,
      qty: cart.productById[id].qty,
      aspen_id: cart.productById[id].aspen_id,
    });
  }
  const orderRequest = {
    accountGuid: '109a9b5b-8cdd-4609-9fdd-428826ca741d',
    shippingMethodId: formData.shippingMethod ? formData.shippingMethod : 1,
    subscriptionId: 2,
    warrantyId: formData.warranty ? 0 : 1,
    coupondCode: '',
    shipAddress,
    items,
    rmr: cart.monitoringPlans[cart.planDetails.monitoringPlan].price,
  };
  return orderRequest;
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
      const cart = yield select(state => state.checkout);
      const account = yield getCreateAccountRequest(formData, cart);
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

function* createOrder() {
  try {
    const fields =  yield select(getFormSyncErrors('checkout_shipping'));
    const fieldNames = fieldsToFieldNameArray(fields);
    console.log('ccc',fields,fieldNames, yield select(isValid('checkout_shipping')))
    yield put(createOrderR.request());
    if (yield select(isValid('checkout_shipping'))) {
      const formData = yield select(getFormValues('checkout_shipping'));
      const cart = yield select(state => state.checkout);
      const account = yield getCreateOrderRequest(formData, cart);
      const response = yield call(coveAPI, { url: '/meliae/createOrder', method: 'POST', data: account });
      yield put(createOrderR.success(response.data));
      yield Router.push({ pathname: '/checkout', query: { stage: 'payment' } });
    } else {
      yield put(touch('checkout_customer', ...fieldNames));
    }
  } catch (err) {
    yield put(createOrderR.failure(err));
  } finally {
    yield put(createOrderR.fulfill());
  }
}

export default function* () {
  yield takeEvery(validateContactR.TRIGGER, (data) => { console.log('aaaaa', data); });
  yield takeLatest(createAccountR.TRIGGER, createAccount);
  yield takeLatest(createOrderR.TRIGGER, createOrder);
}
