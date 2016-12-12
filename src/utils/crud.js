import db from './db';

module.exports = {

  create(table, values) {
    return db(table).insert(values);
  },

  read(table) {
    return db.select().from(table);
  },

  readWhere(table, where) {
    return db.select().from(table).where(where);
  },

  update(table, where, values) {
    return db(table).where(where).update(values);
  },

  del(table, where) {
    return db(table).where(where).del();
  }

};