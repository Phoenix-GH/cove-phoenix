import Router from 'next/router';
import _ from 'lodash';
import normalizeState from 'us-states-normalize';
import { getFormValues, touch, destroy, getFormSyncErrors, isValid } from 'redux-form';
import { put, call, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { validateContactR, createAccountR, createOrderR, completeOrderR } from './routine';
import { moveCartToOrdered } from './actions';
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

const buildEquipmentList = (cart) => {
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
  return cartRequest;
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
  
  accountRequest.cart = buildEquipmentList(cart);
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
      qty: cart.productById[id].quantity,
      aspen_id: cart.productById[id].aspen_id,
    });
  }
  const orderRequest = {
    accountGuid: cart.checkout.accountGuid,
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

const getCompleteOrderRequest = (formData, cart) => {
  const { monitoringPlans, planDetails, cartItemIds, productById } = cart;
  const exp = formData.cc.exp.split('/');
  let equipmentTotal = 249.00;
  cartItemIds.map((val) => {
    equipmentTotal += parseFloat(productById[val].price);
  });

  const planPrice = monitoringPlans[planDetails.monitoringPlan].price;
  const tax = parseFloat(planDetails.tax);
  const request = {
    cc: {
      number: formData.cc.number,
      expMonth: exp[0],
      expYear: exp[1],
    },
    cart: buildEquipmentList(cart),
    total: equipmentTotal + planPrice + tax,
    accountGuid: cart.checkout.accountGuid,
  };
  return request;
};

function* validateContact() {
  try {
    yield put(validateContactR.request());
    const response = call(coveAPI, { url: '/meliae/verifyContact', data: JSON.stringify({ phone: 8652071753 }) });
  } catch (err) {
    yield put(validateContactR.failure());
  }
}

function* createAccount() {
  try {
    yield put(createAccountR.request());
    if (yield select(isValid('checkout_customer'))) {
      const formData = yield select(getFormValues('checkout_customer'));
      const cart = yield select(state => state.checkout);
      const account = yield getCreateAccountRequest(formData, cart);
      const response = yield call(coveAPI, { url: '/meliae/createAccount', method: 'POST', data: JSON.stringify(account) });
      yield put(createAccountR.success(response.data));
      yield Router.push({ pathname: '/checkout/shipping', query: { stage: 'shipping' } });
    } else {
      const fields =  yield select(getFormSyncErrors('checkout_customer'));
      const fieldNames = fieldsToFieldNameArray(fields);
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
    yield put(createOrderR.request());
    const formData = yield select(getFormValues('checkout_shipping'));
    const formValid =  yield select(isValid('checkout_shipping'));
    const { differentShipAddress } = formData.shipAddress;
    if (!differentShipAddress || (differentShipAddress && formValid)) {
      const cart = yield select(state => state.checkout);
      const account = yield getCreateOrderRequest(formData, cart);
      const response = yield call(coveAPI, { url: '/meliae/createOrder', method: 'POST', data: JSON.stringify(account) });
      yield put(createOrderR.success(response.data));
      yield Router.push({ pathname: '/checkout/payment', query: { stage: 'payment' } });
    } else {
      const fields = yield select(getFormSyncErrors('checkout_shipping'));
      const fieldNames = fieldsToFieldNameArray(fields);
      yield put(touch('checkout_shipping', ...fieldNames));
    }
  } catch (err) {
    yield put(createOrderR.failure(err));
  } finally {
    yield put(createOrderR.fulfill());
  }
}

function* completeOrder() {
  try {
    yield put(completeOrderR.request());
    if (yield select(isValid('checkout_payment'))) {
      const formData = yield select(getFormValues('checkout_payment'));
      const cart = yield select(state => state.checkout);
      const order = yield getCompleteOrderRequest(formData, cart);
      const response = yield call(coveAPI, { url: '/meliae/completeOrder', method: 'POST', data: JSON.stringify(order) });
      yield put(completeOrderR.success(response.data));
      yield Router.push({ pathname: '/order' });
    } else {
      const fields = yield select(getFormSyncErrors('checkout_payment'));
      const fieldNames = fieldsToFieldNameArray(fields);
      yield put(touch('checkout_payment', ...fieldNames));
    }
  } catch (err) {
    yield put(completeOrderR.failure(err));
  } finally {
    //yield put(moveCartToOrdered());
    yield put(destroy('checkout_customer', 'checkout_shipping', 'checkout_payment'));
    yield put(completeOrderR.fulfill());
  }
}

export default function* () {
  yield takeEvery(validateContactR.TRIGGER, (data) => { console.log('aaaaa', data); });
  yield takeLatest(createAccountR.TRIGGER, createAccount);
  yield takeLatest(createOrderR.TRIGGER, createOrder);
  yield takeLatest(completeOrderR.TRIGGER, completeOrder);
}
