import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { fromJS } from 'immutable';
import storage from 'localforage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

import { tokenR } from '../redux/user/routine';
import { getProductsR } from '../redux/general/routine';
import { authMiddleware } from '../utils/api';
import rootReducer from '../redux/reducers';
import rootSaga from '../redux/sagas';

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger();

  const middleware = compose(composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    loggerMiddleware,
    authMiddleware,
    routerMiddleware(history),
    thunkMiddleware,
  )));

  const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    fromJS(initialState),
    middleware,
  );

  sagaMiddleware.run(rootSaga);
  window.persistor = persistStore(store);
  store.dispatch(tokenR.trigger());

  return store;
}
