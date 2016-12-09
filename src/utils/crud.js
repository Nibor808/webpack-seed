import db from './db';

module.exports = {

  read(table, field, value) {
    const key = field;
    const opts = {};
    opts[key] = value;
    return db.select().from(table).where(opts);
  }
};