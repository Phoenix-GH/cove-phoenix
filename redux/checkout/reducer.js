import { validatePhone } from './routine';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case validatePhone.TRIGGER:
      return {
        ...state,
        loading: true,
      };
    case validatePhone.SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case validatePhone.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case validatePhone.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

