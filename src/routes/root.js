
module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('login', {loggedIn: false});
  });

  app.get('/workspace', (req ,res) => {
    if(req.session.userName == undefined && req.session.adminName == undefined) {
      res.render('oops');
    }else {
      let isAdmin;
      if(req.session.adminName) {
        isAdmin = true;
      }
      res.render('workspace', {
        loggedIn: true,
        name: req.session.userName || req.session.adminName,
        isAdmin
      });
    }
  });

  app.get('/admin', (req, res) => {
    if(req.session.adminName) {
      res.render('admin', {
        name: req.session.adminName,
        loggedIn: true,
        admin: true,
        workspace: true
      });
    }else {
      res.render('oops', {admin: true});
    }
  });

};