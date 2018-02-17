import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import  types from './actionTypes';

export const initStore = (initialState = typeof window !== 'undefined' ? window.rootRedux : {}) => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
