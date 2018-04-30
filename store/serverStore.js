import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../redux/reducers';

export default () => createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
