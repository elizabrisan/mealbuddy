import Storage from '../../api/storage';

export function initialize() {
  return {type: 'GET_FRIDGE', payload: Storage.getFridge()}
}

export function addToFridge(item) {
  return {
    type: 'ADD_TO_FRIDGE',
    payload: Storage.getFridge().then(data => {
      if (data.content.indexOf(item) === -1) {
        data.content.push(item);
      }
      console.log(data)
      return Storage.saveFridge(data)
    }).then(() => {
      return Storage.getFridge()
    })
  }
}
