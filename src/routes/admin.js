import {readWhere, read} from '../utils/crud';

module.exports = (app) => {

  app.post('/admin-login', (req, res) => {
    const admin = req.body.admin;
    if(!admin.userName || !admin.password) {
      res.render('admin', {
        error: 'you are missing some info',
        admin: true
      });
    }else {
      readWhere('users', {userName: admin.userName})
        .then((data) => {
          if(data.length == 0 || admin.password != data[0].password) {
            res.render('admin', {
              error: 'incorrect user name or password',
              admin: true
            });
          }else if(data[0].permission != 0) {
            res.render('admin', {
              error: 'you are not an admin user',
              admin: true
            });
          }else {
            req.session.adminName = admin.userName;
            read('users')
              .then((data) => {
                res.render('admin', {
                  name: req.session.adminName,
                  data: data,
                  loggedIn: true,
                  admin: true
                });
              });
          }
        });
    }
  });

};
