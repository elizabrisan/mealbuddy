import React from 'react';
import {
  IndexRoute
} from 'react-router'
import {
  combineReducers
} from 'redux';
import {
  routerReducer
} from 'react-router-redux'

let mappedRouteValues = {};

const root = (state = {
  loaded: false,
  recipes: [],
  shoppingList: [],
  content: [],
  ingredientsList: []
}, action) => {

  let newState = state;

  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      newState = {
        ...state,
        recipes: []
      }
      break;
    case 'GET_FRIDGE_FULFILLED':
      newState = {
        ...state,
        fridge: action.payload,
        content: action.payload.content,
        loaded: true
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
    case 'GET_RECIPES':
      newState = {
        ...state,
        recipes: []
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

    case 'GET_RECIPE_BY_ID_FULFILLED':
    const id = action.payload.meals[0].idMeal;
      let found = state.recipes.findIndex((recipe) => {
        return recipe.idMeal === id;
      })

      console.log(id, found)

      newState = {
        ...state,
        // recipes: [
        //   ...state.recipes.slice(0, found),
        //   action.payload.meals[0],
        //   ...state.recipes.slice(found+1),
        // ],
        initialized: true
      }
      break;

    case 'GET_SHOPPING_LIST_FULFILLED':
      newState = {
        ...state,
        shoppingList: action.payload.content
      }
      break;

    case 'ADD_TO_SHOPPING_LIST_FULFILLED':
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

    case 'GET_INGREDIENTS_LIST_FULFILLED':
      newState = {
        ...state,
        loaded: true,
        ingredientsList: action.payload.meals
      }
      break;

      
      case 'MOVE_TO_FRIDGE_FULFILLED':
        newState = {
          ...state,
          shoppingList: action.payload.content
        }
        break;
  }

  return newState;

}

export default function createReducer(asyncReducers) {
  return combineReducers({
    root,
    router: routerReducer
  });
}
