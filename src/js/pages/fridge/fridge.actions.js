import Storage from '../../api/storage';

export function initialize() {
  return {
    type: 'GET_FRIDGE',
    payload: Storage.getFridge()
  }
}

export function addToFridge(item) {
  return {
    type: 'ADD_TO_FRIDGE',
    payload: Storage.getFridge().then(data=> {
      data.content.push(item);
      return Storage.saveFridge(data)
    }).then(() =>{
      return Storage.getFridge()
    })
  }
}
