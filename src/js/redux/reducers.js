import React from 'react';
import {IndexRoute} from 'react-router'
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

let mappedRouteValues = {};

const root = (state = {
  recipes: [],
  content: []
}, action) => {

  let newState = state;

  switch (action.type) {
    case 'GET_FRIDGE_FULFILLED':
      newState = {
        ...state,
        fridge: action.payload,
        content: action.payload.content
      }
      break;

    case 'ADD_TO_FRIDGE_FULFILLED':
      newState = {
        ...state,
        fridge: action.payload,
        content: action.payload.content
      }
      break;

    case 'REMOVE_FROM_FRIDGE_FULFILLED':
      newState = {
        ...state,
        fridge: action.payload,
        content: action.payload.content
      }
      break;
    case 'GET_RANDOM_RECIPE_FULFILLED':
      newState = {
        ...state,
        recipes: action.payload.meals,
        initialized: true
      }
      break;
  }

  return newState;

}

export default function createReducer(asyncReducers) {
  return combineReducers({root, router: routerReducer});
}
