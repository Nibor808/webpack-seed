'use-strict'

module.exports = (app) => {

  app.post('/login', (req, res) => {
    const user = req.body.user
    res.render('index', {
      loginEmail: user.email,
      loginPassword: user.password
    });
  });
}