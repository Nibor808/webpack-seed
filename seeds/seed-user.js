
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({firstName: 'Admin', lastName: 'User', password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)), userName: 'a_user', permission: 0, created_at: knex.fn.now()}),
        knex('users').insert({firstName: 'Regular', lastName: 'User', password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)), userName: 'r_user', permission: 1, created_at: knex.fn.now()})
      ]);
    });
};
