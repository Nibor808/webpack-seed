
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({firstName: 'Test', lastName: 'Test', password: 'password', userName: 't_test', permission: 0, created_at: knex.fn.now()}),
      ]);
    });
};
