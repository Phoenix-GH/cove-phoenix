import Router from 'next/router';
import _ from 'lodash';
import normalizeState from 'us-states-normalize';
import { getFormValues, touch, destroy, getFormSyncErrors, isValid } from 'redux-form';
import { put, call, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { validateContactR, createAccountR, createOrderR, completeOrderR, orderConfirmationR } from './routine';
import { moveCartToOrdered } from './actions';
import types from '../actionTypes';
import { getCart } from './selector';
import axios from '../../utils/api';
import { starterPack } from '../../data';

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

const buildInvoiceList = (cart) => {
  const items = [];
  /* get starter pack items if product exists in cart add to quantity */
  for (let i = 0; i < cart.cartItemIds.length; i += 1) {
    const id = cart.cartItemIds[i];
    const quantity = parseInt(cart.productById[id].quantity, 10);

    items.push({
      name: cart.productById[id].display_name,
      qty: quantity,
      price: cart.productById[id].price,
      id: cart.productById[id].id,
      aspen_id: cart.productById[id].aspen_id,
    });
  }

  const cartRequest = {
    rmr: cart.monitoringPlans[cart.planDetails.monitoringPlan].price,
    package: starterPack.package,
    items,
  };
  return cartRequest;
};

const buildEquipmentList = (cart) => {
  const items = [];
  const sp = _.cloneDeep(starterPack.items);
  const spItems = _.keyBy(sp, 'id');
  console.log('sp', sp, spItems)
  for (let i = 0; i < cart.cartItemIds.length; i += 1) {
    const id = cart.cartItemIds[i];
    let quantity = parseInt(cart.productById[id].quantity, 10);
    if (spItems[id]) {
      quantity += spItems[id].quantity;
      delete spItems[id];
    }
    items.push({
      name: cart.productById[id].display_name,
      qty: quantity,
      price: cart.productById[id].price,
      id: cart.productById[id].id,
      aspen_id: cart.productById[id].aspen_id,
    });
  }

  Object.keys(spItems).forEach((item) => {
    console.log('item', item);
    items.push({
      name: spItems[item].display_name,
      qty: spItems[item].quantity,
      price: spItems[item].price,
      id: spItems[item].id,
      aspen_id: spItems[item].aspen_id,
    });
  });

  return items;
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

  accountRequest.cart = buildInvoiceList(cart);
  console.log('select ', accountRequest);
  return accountRequest;
};

const getCreateOrderRequest = (formData, cart) => {
  const shipAddress = formData.differentShipAddress ? formData.shipAddress : {};
  shipAddress.stateCode = shipAddress.state ? normalizeState(shipAddress.state) : null;
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
    accountGuid: cart.planDetails.accountGuid,
    shippingMethodId: formData.shippingMethod ? formData.shippingMethod : 1,
    subscriptionId: 2,
    warrantyId: formData.warranty ? 0 : 1,
    coupondCode: '',
    shipAddress,
    equipment: buildEquipmentList(cart),
    rmr: cart.monitoringPlans[cart.planDetails.monitoringPlan].price,
  };
  return orderRequest;
};

const getCompleteOrderRequest = (formData, cart) => {
  const {
    monitoringPlans,
    planDetails,
    cartItemIds,
    productById,
  } = cart;
  const exp = formData.cc.exp.split('/');
  let equipmentTotal = 249.00; /* TODO pull from central store result from db call */
  cartItemIds.map((val) => {
    equipmentTotal += parseFloat(productById[val].price);
    return true;
  });

  const planPrice = parseFloat(monitoringPlans[planDetails.monitoringPlan].price);
  const tax = parseFloat(planDetails.tax);
  const billAddress = formData.billAddress.differentBillAddress ? formData.billAddress : {};
  if (!_.isEmpty(billAddress)) {
    billAddress.stateCode = billAddress.state ? normalizeState(billAddress.state) : null;
  }
  const request = {
    cc: {
      number: formData.cc.number,
      expMonth: exp[0],
      expYear: exp[1],
      name: formData.cc.name,
    },
    billAddress,
    cart: buildInvoiceList(cart),
    total: equipmentTotal + planPrice + tax,
    accountGuid: cart.planDetails.accountGuid,
  };
  return request;
};

function* validateContact() {
  try {
    yield put(validateContactR.request());
    const response = call(axios, { url: '/meliae/verifyContact', data: { phone: 8652071753 } });
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
      const response = yield call(axios.post, '/meliae/createAccount', account);
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
      const order = yield getCreateOrderRequest(formData, cart);
      const response = yield call(axios.post, '/meliae/createOrder', order);
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
    const formValid =  yield select(isValid('checkout_payment'));
    const formData = yield select(getFormValues('checkout_payment')) || {};
    const fields = yield select(getFormSyncErrors('checkout_shipping'));
    const { differentBillAddress } = formData.billAddress || false;
    if ((!differentBillAddress && !fields.cc) || (differentBillAddress && formValid)) {   
      const cart = yield select(state => state.checkout);
      const order = yield getCompleteOrderRequest(formData, cart);
      const response = yield call(axios.post, '/meliae/completeOrder', order);
      if (response.warning) {
        yield put(completeOrderR.failure({ warning: response.warning }));
      } else {
        yield put(completeOrderR.success(response.data));
        yield put(moveCartToOrdered({
          planDetails: cart.planDetails,
          equipment: buildEquipmentList(cart),
          invoice: buildInvoiceList(cart),
        }));
        yield put({ action: types.CLEAR_CART });
        yield Router.push({ pathname: '/order-confirmation' });
        yield put(destroy('checkout_customer', 'checkout_shipping', 'checkout_payment'));
      }
    } else {
      const fieldNames = fieldsToFieldNameArray(fields);
      yield put(touch('checkout_payment', ...fieldNames));
    }
  } catch (err) {
    yield put(completeOrderR.failure(err));
  } finally {
    yield put(completeOrderR.fulfill());
  }
}

function* orderConfirmation() {
  try {
    yield put(orderConfirmationR.request());
    const accountGuid = yield select(state => state.checkout.checkout.account.accountGuid);
    const response = yield call(axios.post, '/meliae/confirmOrder', { accountGuid });
    yield Router.push({ pathname: '/order-summary' });
  } catch (err) {
    yield put(orderConfirmationR.failure(err));
  } finally {
    yield put(orderConfirmationR.fulfill());
  }
}
export default function* () {
  yield takeEvery(validateContactR.TRIGGER, (data) => { console.log('aaaaa', data); });
  yield takeLatest(createAccountR.TRIGGER, createAccount);
  yield takeLatest(createOrderR.TRIGGER, createOrder);
  yield takeLatest(completeOrderR.TRIGGER, completeOrder);
  yield takeEvery(orderConfirmationR.TRIGGER, orderConfirmation);
}
