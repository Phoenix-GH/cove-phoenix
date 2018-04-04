import { createStore, applyMiddleware, compose, reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(applyMiddleware(
  reducer,
  applyMiddleware(sagaMiddleware),
));
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });
