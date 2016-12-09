import db from './db';

module.exports = {

  read(table, values) {
    return db.select().from(table).where(values);
  }
};