import {create, readWhere, read, update, del} from '../utils/crud';

module.exports = (app) => {

  app.get('/admin/users', (req, res) => {
    if(req.session.adminName == undefined) {
      res.render('oops', {admin: true});
    }else {
      read('users')
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
