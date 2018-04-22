import { put, call, takeLatest, select } from 'redux-saga/effects';
import { getProductsR } from './routine';
import { tokenR } from '../user/routine';
import coveAPI from '../../utils/api';


function* getProducts() {
  try {
    yield put(getProductsR.request());
    const token = yield select(state => state.user.auth.token);
    if (!token) {
      yield takeLatest(tokenR.SUCCESS, getProducts);
    } else {
      const response = yield call(coveAPI, { url: '/product' });
      yield put(getProductsR.success(response.data));
    }
  } catch (err) {
    yield put(getProductsR.failure(err));
  } finally {
    yield put(getProductsR.fulfill());
  }
}

export default function* () {
  yield takeLatest(getProductsR.TRIGGER, getProducts);
}
