
exports.up = function(knex) {
  return knex.schema
    .createTableIfNotExists('users', function(table) {
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('password');
      table.string('userName');
      table.integer('permission');
      table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users');
};
