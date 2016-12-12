
module.exports = (app) => {

  app.get('/', (req, res) => {
    req.session.userName = '';
    res.render('login', {loggedIn: false});
  });

  app.get('/workspace', (req ,res) => {
    if(req.session.userName == undefined && req.session.adminName == undefined) {
      res.render('oops');
    }else {
      res.render('workspace', {
        loggedIn: true,
        name: req.session.userName || req.session.adminName
      });
    }
  });

  app.get('/admin', (req, res) => {
    req.session.adminName = '';
    res.render('admin', {
      loggedIn: false,
      admin: true
    });
  });

  app.get('/logout', (req, res) => {
    req.session.userName = '';
    req.session.adminName = '';
    delete req.session.userName;
    delete req.session.adminName;
    res.render('login', {loggedIn: false});
  });
};