import { takeLatest, call, put } from 'redux-saga/effects';

function verifyContact() {
}
function* workerSaga() {
  try {
    const response = yield call(verifyContact);
    const contact = response.data.message;
    // dispatch a success action to the store with the new dog
    yield put({ type: 'API_CALL_SUCCESS', contact });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}

export default function* rootSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}
