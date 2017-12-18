import types from '../actionTypes';

const initialState = {
  finance: false,
  total: null,
  monthly: null,
  club: false,
  coupon: null,
  subscriptionType: null
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FINANCE: {
      return Object.assign({}, state, {
        finance: !state.finance
      })
    }
    case types.SELECT_SUBSCRIPTION_TYPE: {
      return Object.assign({}, state, {
        subscriptionType: action.subscription
      })
    }
    default: {
      return state;
    }
  }
};

export default payment;
