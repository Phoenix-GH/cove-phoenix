import { combineReducers } from 'redux';
import types from '../actionTypes';

const initialState = {
  monitorAddress: {},
  shippingAddress: {
    shipToMonitorAddress: true,
  },
  customer: {},
}

const monitorAddress = (state = initialState.customer, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
const shippingAddress = (state = initialState.customer, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
const customer = (state = initialState.customer, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default combineReducers({
  monitorAddress,
  shippingAddress,
  customer,
});
