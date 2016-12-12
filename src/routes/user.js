import {readWhere} from '../utils/crud';

module.exports = (app) => {

  app.post('/login', (req, res) => {
    const user = req.body.user;
    if (!user.userName || !user.password) {
      res.render('login', {error: 'you are missing some info'});
    }else {
      readWhere('users', {userName: user.userName})
        .then((data) => {
          if(data.length == 0 || data[0].password != user.password) {
            res.render('login', {error: 'incorrect user name or password'});
          }else {
            req.session.userName = user.userName;
            res.render('workspace', {
              name: req.session.userName,
              loggedIn: true
            });
          }
        });
    }
  });
};