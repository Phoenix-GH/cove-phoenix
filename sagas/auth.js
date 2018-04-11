import { takeEvery, call } from 'redux-saga/effects';
import { request } from '../utils/request';
import { AuthConstants } from '../constants';

function* auth(action) {
  alert('dddd');
  console.log('authSaga', action);
  yield call(request({
    type: AuthConstants.SESSION,
    method: 'GET',
    url: '/session',
  }), action);
}

export default function* () {
  yield takeEvery(AuthConstants.SESSION, auth);
}
