import { validateContactR } from './routine';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case validateContactR.TRIGGER:
      return {
        ...state,
        loading: true,
      };
    case validateContactR.SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case validateContactR.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case validateContactR.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

