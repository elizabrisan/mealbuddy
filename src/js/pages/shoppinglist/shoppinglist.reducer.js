export default(state = {
  shoppingList: undefined,
  content: []
}, action) => {
  let newState = state;
  switch (action.type) {

    case 'GET_SHOPPING_LIST_FULFILLED':
      newState = {
        ...state,
        shoppingList: action.payload,
        content: action.payload.content
      }
      break;

    case 'ADD_TO_SHOPPINGLIST_FULFILLED':
      newState = {
        ...state,
        shoppingList: action.payload,
        content: action.payload.content
      }
      break;

    case 'REMOVE_FROM_SHOPPING_LIST_FULFILLED':
      newState = {
        ...state,
        shoppingList: action.payload,
        content: action.payload.content
      }
      break;
  }

  return newState;

}
