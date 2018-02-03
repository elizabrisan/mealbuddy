import React from 'react';
import {IndexRoute} from 'react-router'
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

let mappedRouteValues = {};

const root = (state = {
  loaded: false,
  recipes: [],
  shoppingList: [],
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
    case 'GET_RECIPES_FULFILLED_PENDING':
      newState = {
        ...state,
        loaded: false
      }
      break;
    case 'GET_RECIPES_FULFILLED':
      newState = {
        ...state,
        loaded: true,
        recipes: action.payload.meals && action.payload.meals !== null
          ? action.payload.meals
          : [],
        initialized: true
      }
      break;

    case 'GET_SHOPPING_LIST_FULFILLED':
      newState = {
        ...state,
        shoppingList: action.payload.content
      }
      break;

    case 'ADD_TO_SHOPPINGLIST_FULFILLED':
      newState = {
        ...state,
        shoppingList: action.payload.content
      }
      break;

    case 'REMOVE_FROM_SHOPPING_LIST_FULFILLED':
      newState = {
        ...state,
        shoppingList: action.payload.content
      }
      break;
  }

  return newState;

}

export default function createReducer(asyncReducers) {
  return combineReducers({root, router: routerReducer});
}
