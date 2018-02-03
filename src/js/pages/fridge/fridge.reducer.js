
export default(state = {
  fridge: undefined,
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
  }

  return newState;

}
