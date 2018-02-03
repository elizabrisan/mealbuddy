export default(state = {
  recipes: []
}, action) => {
  let newState = state;
  switch (action.type) {

    case 'GET_RECIPES_FULFILLED':
      newState = {
        ...state,
        recipes: action.payload,
        initialized: true
      }
      break;
  }

  return newState;

}
