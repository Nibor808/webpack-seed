import knex from '../utils/db';

module.exports = (app) => {

  app.get('/admin/users', (req, res) => {
    if(req.session.adminName == undefined) {
      res.render('oops', {admin: true});
    }else {
      knex('users').select()
        .then((data) => {
          res.render('users', {
            data: data,
            loggedIn: true,
            admin: true,
            workspace: true
          });
        });
    }
  });

};
