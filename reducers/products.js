import types from '../actionTypes';


const products = (state = {}, action) => {
  console.log('pp', action.type, types.LOAD_PRODUCTS)
  switch (action.type) {
    case types.LOAD_PRODUCTS: {
      console.log('zz', action)
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
