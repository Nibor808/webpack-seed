import {read} from '../utils/crud';

module.exports = (app) => {

  app.post('/login', (req, res) => {
    const user = req.body.user;
    if (user.password === '' || user.userName === '') {
      res.render('login', {error: 'you are missing some info'});
    }else {
      read('users', 'userName', user.userName)
        .then((data) => {
          if(data.length == 0) {
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