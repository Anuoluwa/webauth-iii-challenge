import db from "../utils/dbConfig";

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  getByUsername
};

function get() {
  return db('users');
}

function getById(id) {
  return db('users')
    .where({ id })
    .first();

}

function getByUsername(username) {
  return db('users')
    .where({ username })
    .first();
}


function insert(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('users')
    .where('id', id)
    .del();
}
