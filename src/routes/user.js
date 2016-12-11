import {readWhere} from '../utils/crud';

module.exports = (app) => {

  app.post('/login', (req, res) => {
    const user = req.body.user;
    if (user.password === '' || user.userName === '') {
      res.render('login', {error: 'you are missing some info'});
    }else {
      readWhere('users', {userName: user.userName})
        .then((data) => {
          if(data.length == 0 || data.password != user.password) {
            res.render('login', {error: 'incorrect user name or password'});
          }else {
            res.render('index', {
              name: `${data[0].firstName} ${data[0].lastName}`
            });
          }
        });
    }
  });
};