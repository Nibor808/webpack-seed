import knex from '../utils/db';
import bcrypt from 'bcrypt';

module.exports = (app) => {
  const params = {
    loggedIn: true,
    admin: true,
    isAdmin: true
  };

  app.get('/user/new', (req, res) => {
    res.render('user-new', params);
  });

  app.post('/user/create', (req, res) => {
    const user = req.body.user;
    knex('users').where({firstName: user.firstName, lastName: user.lastName, userName: user.userName})
      .then((data) => {
        if(data.length > 0) {
          res.render('user-new', {
            loggedIn: true,
            admin: true,
            isAdmin: true,
            fName: user.firstName,
            lName: user.lastName,
            uName: user.userName,
            error: 'that user already exists'
          });
        }else {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
          const values = {
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            userName: user.userName,
            permission: user.permission,
            created_at: knex.fn.now(),
            updated_at: null
          };
          knex('users').insert(values)
            .then((data) => {
              if(data.length != 0) {
                res.render('admin', params);
              }
            });
        }
      });
  });

};