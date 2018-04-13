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

import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger();

  const middleware = compose(applyMiddleware(
    sagaMiddleware,
    loggerMiddleware,
    routerMiddleware(history),
    composeWithDevTools(thunkMiddleware),
  ));

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
  persistStore(store);
  return store;
}
