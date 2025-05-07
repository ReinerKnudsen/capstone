/** Here happens everything regarding Redux */
import { compose, legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

/** Root Reducer */

/** Middleware receives an action before the reducers get their hands on it */
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(rootReducer, undefined, composedEnhancers);
