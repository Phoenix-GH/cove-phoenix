import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import storage from 'localforage';
import { persistStore, persistReducer } from 'redux-persist';
import { loadSuccess } from '../actions';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default (initialState) => {
const store = createStore(persistedReducer,  composeWithDevTools(applyMiddleware(thunkMiddleware)));

  persistStore(store);

  return store;
};
