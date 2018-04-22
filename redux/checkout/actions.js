import types from '../actionTypes';

export const addProductToCart = productId => dispatch => (
  dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: { productId } })
);

export const changeQuantity = (productId, previousQuantity, newQuantity) => (dispatch) => {
  if (newQuantity === 0) {
    dispatch({ type: types.REMOVE_FROM_CART, payload: { productId } });
  } else if (previousQuantity === 0 && newQuantity === 1) {
    dispatch({ type: types.ADD_TO_CART, payload: { productId } });
  }

  dispatch({ type: types.UPDATE_QUANTITY, payload: { productId, quantity: newQuantity } });
};

export const selectMonitoringPlan = monitoringPlan => dispatch => (
  dispatch({ type: types.SELECT_SUBSCRIPTION_TYPE, payload: { monitoringPlan } })
);
