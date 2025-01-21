import { legacy_createStore,applyMiddleware } from "redux";

import logger from "redux-logger";

import {persistStore} from 'redux-persist';

import rootReducer from "./root-reducer";



const middlewares = [logger];

const store = legacy_createStore(rootReducer,applyMiddleware (...middlewares));

const persistor = persistStore(store)

export  {store, persistor};
