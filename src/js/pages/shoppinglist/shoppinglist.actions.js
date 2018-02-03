import Storage from '../../api/storage';

export function initialize() {
  return {type: 'GET_SHOPPING_LIST', payload: Storage.getShoppingList()}
}

export function addToShoppingList(item) {
  return {
    type: 'ADD_TO_SHOPPING_LIST',
    payload: Storage.getShoppingList().then(data => {
      if (data.content.indexOf(item) === -1) {
        data.content.push(item);
      }
      return Storage.saveShoppingList(data)
    }).then(() => {
      return Storage.getShoppingList()
    })
  }
}
export function removeFromShoppingList(item) {
  return {
    type: 'REMOVE_FROM_SHOPPING_LIST',
    payload: Storage.getShoppingList().then(data => {
      data.content.splice(data.content.indexOf(item), 1);
      return Storage.saveShoppingList(data)
    }).then(() => {
      return Storage.getShoppingList()
    })
  }
}
