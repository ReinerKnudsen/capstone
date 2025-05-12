/** Here happens everything regarding Redux */
import { compose, legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

/** Middleware receives an action before the reducers get their hands on it */
const middleWares = [import.meta.env.MODE === 'development' && logger].filter(
  Boolean
);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

// If you want to use the Redux DevTools
// const composeEnhancer =
//   (import.meta.env.MODE === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);
