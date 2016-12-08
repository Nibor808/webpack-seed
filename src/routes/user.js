'use-strict'

module.exports = (app) => {

  app.post('/login', (req, res) => {
    const user = req.body.user
    if (user.password === '' || user.email === '') {
      res.render('login', {
        error: 'you are missing some info'
      });
    }else {
      res.render('index', {
        loginEmail: user.email,
        loginPassword: user.password
      });
    }
  });
}