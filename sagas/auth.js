import { takeEvery, call } from 'redux-saga/effects';
import { request } from '../utils/request';
import { AuthConstants } from '../constants';

function* session(action) {
  yield call(request({
    type: AuthConstants.SESSION,
    method: 'GET',
    url: '/session',
  }), action);
}

export default function* authSaga() {
  yield takeEvery('SESSION', session);
}

