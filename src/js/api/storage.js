import PouchDB from 'pouchdb';

var db = new PouchDB('fridge');

db.get('fridge').catch(err => {
  db.put({_id: "fridge", content: []})
});

db.get('shoppingList').catch(err => {
  db.put({_id: "shoppingList", content: []})
});

class Storage {

  getFridge() {
    return db.get('fridge');
  }

  saveFridge(fridge) {
    return db.put({
      ...fridge,
      _id: "fridge"
    })
  }
  
  getShoppingList() {
    return db.get('shoppingList');
  }
  
  saveShoppingList(shoppingList) {
    return db.put({
      ...shoppingList,
      _id: "shoppingList"
    })
  }
  
}

export default new Storage();
