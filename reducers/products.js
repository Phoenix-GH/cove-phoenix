import types from '../actionTypes';

const products = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS: {
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
