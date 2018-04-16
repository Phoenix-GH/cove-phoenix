import { createRoutine, bindRoutineToReduxForm } from 'redux-saga-routines';

export const createAccount = createRoutine('CREATE_ACCOUNT');
export const validateAddress = createRoutine('VALIDATE_ADDRESS');
export const validatePhone = createRoutine('VALIDATE_PHONE');
export const submitFormHandler = bindRoutineToReduxForm(createAccount);
export const validatePhoneHandler = bindRoutineToReduxForm(validatePhone);
