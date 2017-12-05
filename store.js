import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  cartItems: [],
  products: {},

}

export const actionTypes = {
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
  CHANGE_QUANTITY: 'CHANGE_QUANTITY',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { cart: state.cart.push(action.payload)})
    case actionTypes.ADD_PRODUCT_TO_CART:
      return Object.assign({}, state, {
        products: {}
      })
    default: return state
  }
}

// ACTIONS
export const addProductToCart = () => dispatch => {
  return dispatch({ type: actionTypes.ADD_PRODUCT_TO_CART, product: productId })
}


export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
