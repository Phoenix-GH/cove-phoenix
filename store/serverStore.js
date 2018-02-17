import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from "../reducers/index";

export default (initialState, {isServer}) => {
  return createStore(reducers,composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
