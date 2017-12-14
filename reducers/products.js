import { LOAD_PRODUCTS, ADD_TO_CART } from '../store';


const product = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
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

export default product;
