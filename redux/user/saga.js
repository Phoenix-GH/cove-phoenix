import { put, call, takeLatest , takeEvery} from 'redux-saga/effects';
import { tokenRoutine } from './routine';
import coveAPI from '../../utils/api';


function* getToken(formData) {
  console.log('trigger')
  try {
    console.log('trigger')
    // trigger request action
    yield put(tokenRoutine.request());
    // perform request to '/submit' to send form data
    const response = yield call(coveAPI, { url: '/session' });
    // if request successfully finished
    console.log('resposne', response);
    yield put(tokenRoutine.success(response.data.token));
  } catch (error) {
    // if request failed
    yield put(tokenRoutine.failure(new SubmissionError({ _error: error.message })));
  }
}

export default function* () {
  yield takeLatest(tokenRoutine.TRIGGER, getToken);
}
