import db from './db';

module.exports = {

  read(table) {
    return db.select().from (table);
  },

  readWhere(table, values) {
    return db.select().from(table).where(values);
  }
};