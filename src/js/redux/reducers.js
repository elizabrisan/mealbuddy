import React from 'react';
import {IndexRoute} from 'react-router'
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import front from '../pages/front/front.reducer';
import fridge from '../pages/fridge/fridge.reducer';


let mappedRouteValues = {};

const root = (state = {

}, action) => {

  let newState = state;

  switch (action.type) {


  }

  return newState;

};

export default function createReducer(asyncReducers) {
  return combineReducers({
    root,
    front,
    fridge,
    router: routerReducer
  });
}
