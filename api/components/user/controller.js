const TABLA = 'user';



module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }
  function list() {
    return store.list(TABLA);
  }

  return {
    list,

  };
}
// video 5   4:20