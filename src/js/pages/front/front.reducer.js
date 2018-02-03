export default(state = {
  recipes: []
}, action) => {
  let newState = state;
  switch (action.type) {

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
