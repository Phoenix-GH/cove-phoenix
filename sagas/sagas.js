import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function verifyContact() {
  return axios({
    method: 'get',
    url: 'https://api.com',
  });
}
function* workerSaga() {
  try {
    const response = yield call(verifyContact);
    const contact = response.data.message;
    yield put({ type: 'API_CALL_SUCCESS', contact });
  } catch (error) {
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}

export default function* rootSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}
