import PouchDB from 'pouchdb';

var db = new PouchDB('fridge');

db.get('fridge').catch(err => {
  db.put({_id: "fridge", content: []})
})

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

}

export default new Storage();
