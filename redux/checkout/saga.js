import { SubmissionError } from 'redux-form';
import { put, call, takeLatest , takeEvery} from 'redux-saga/effects';
import { validatePhone } from './routine';
import coveAPI from '../../utils/api';

// function* validateFormWatcherSaga() {
//   // run validation on every trigger action
//   yield takeEvery(validatePhone.TRIGGER, validate)
// }
 
// function* validate(action) {
//   // redux-form pass form values and component props to submit handler
//   // so they passed to trigger action as an action payload
//   const { values, props } = action.payload;

//   if (!isValid(values, props)) {
//     // client-side validation failed
//     const errors = getFormErrors(values, props);
//     // reject promise given to redux-form, pass errors as SubmissionError object according to redux-form docs
//     yield put(validatePhone.failure(new SubmissionError(errors)));
//   } else {
//     // send form data to server
//     yield call(sendFormDataToServer, values);
//   }

//   // trigger fulfill action to end routine lifecycle
//   yield put(validatePhone.fulfill());
// }

// function* sendFormDataToServer(formData) {
//   console.log('trigger')
//   try {
//     console.log('trigger')
//     // trigger request action
//     yield put(validatePhone.request());
//     // perform request to '/submit' to send form data
//     const response = yield call(apiClient.request, '/submit', formData);
//     // if request successfully finished
//     yield put(validatePhone.success(response.data));
//   } catch (error) {
//     // if request failed
//     yield put(validatePhone.failure(new SubmissionError({ _error: error.message })));
//   }
// }

function* validatePhoneCall() {
  try {
    yield put(validatePhone.request());
    const response = call(coveAPI, { url: '/meliae/verifyContact', data: { phone: 8652071753 }});
  } catch (err) {
    
  }
}

export default function* () {
  yield takeEvery(validatePhone.TRIGGER, (data) => { console.log('aaaaa', data ); });
}
