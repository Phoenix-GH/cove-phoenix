import { createRoutine } from 'redux-saga-routines';

export const createAccountR = createRoutine('CHECKOUT_CREATE_ACCOUNT');
export const validateContactR = createRoutine('CHECKOUT_VALIDATE_CONTACT');
export const createOrderR = createRoutine('CHECKOUT_CREATE_ORDER');
export const completeOrderR = createRoutine('CHECKOUT_COMPLETE_ORDER');
export const orderConfirmationR = createRoutine('CHECKOUT_ORDER_CONFIRMATION');
