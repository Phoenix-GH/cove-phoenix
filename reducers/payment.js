import types from '../actionTypes';

const initialState = {
  finance: false,
  total: null,
  monthly: null,
  membership: false,
  coupon: null,
  subscriptionId: null,
  warranty: false,
  shippingMethod: 1,
};

const subTypes = {
  clubBasic: { subscriptionId: 1, membership: true, },
  ncBasic: { subscriptionId: 1, membership: false, },
  clubPremium: { subscriptionId: 2, membership: true },
  ncPremium: { subscriptionId: 2, membership: false },
}

const payment = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FINANCE: {
      return Object.assign({}, state, {
        finance: !state.finance
      })
    }
    case types.SELECT_SUBSCRIPTION_TYPE: {
      return Object.assign({}, state, {
        subscriptionId: subTypes[action.subscription].subscriptionId,
        membership: subTypes[action.subscription].membership
      })
    }
    default: {
      return state;
    }
  }
};

export default payment;
