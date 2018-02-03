import {
  applyMiddleware,
  createStore
} from 'redux';
import createReducer from './reducers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import createHistory from 'history/createBrowserHistory';
import {
  routerMiddleware
} from 'react-router-redux'

import {getIngredientsList} from './actions'

export const history = createHistory();
const middleware = applyMiddleware(promise(), thunk, logger(), routerMiddleware(history));
//const middleware = applyMiddleware(promise(), thunk, routerMiddleware(history));
let store;

export function configureStore(initialState) {
  store = createStore(createReducer(), middleware);
  store.dispatch(getIngredientsList());
  return store;
}
