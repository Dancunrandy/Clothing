import { legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga'; // Import your root saga

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

// Run the root saga
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };