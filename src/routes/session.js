import knex from '../utils/db';
import bcrypt from 'bcrypt';

module.exports = (app) => {

  app.post('/login', (req, res) => {
    const user = req.body.user;
    if (!user.userName || !user.password) {
      res.render('login', {error: 'you are missing some info'});
    }else {
      knex('users').where({userName: user.userName})
        .then((data) => {
          if(data.length == 0 || !bcrypt.compareSync(user.password, data[0].password)) {
            res.render('login', {error: 'incorrect user name or password'});
          }else {
            let isAdmin;
            if(data[0].permission === 0) {
              req.session.adminName = user.userName;
              isAdmin = true;
            }else {
              req.session.userName = user.userName;
              isAdmin = false;
            }
            res.render('workspace', {
              name: req.session.userName || req.session.adminName,
              loggedIn: true,
              isAdmin
            });
          }
        });
    }
  });

  app.get('/login', (req, res) => {
    res.render('login', {loggedIn: false});
  });

  app.get('/logout', (req, res) => {
    req.session.userName = '';
    req.session.adminName = '';
    delete req.session.userName;
    delete req.session.adminName;
    res.render('login', {loggedIn: false});
  });
};