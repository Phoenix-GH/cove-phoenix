import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { fromJS } from 'immutable';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger();

  const middleware = compose(applyMiddleware(
    sagaMiddleware,
    loggerMiddleware,
    routerMiddleware(history),
  ));

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    middleware,
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
